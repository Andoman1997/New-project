import React from 'react';
import { ThemeInterface } from '../styled-components';
import { useTheme } from '../utils';

type UseMediaQueryInput = (bp: ThemeInterface['breakpoints']) => string;

interface UseMediaQueryOptions {
  defaultMatches?: boolean;
  noSsr?: boolean;
  ssrMatchMedia?: (query: string) => { matches: boolean };
}

export function useMediaQuery(queryInput: UseMediaQueryInput, options: UseMediaQueryOptions = {}) {
  const { breakpoints } = useTheme();

  let query = typeof queryInput === 'function' ? queryInput(breakpoints) : queryInput;

  query = query.replace(/^@media( ?)/m, '');

  const supportMatchMedia =
    typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';

  const {
    defaultMatches = false,
    matchMedia = supportMatchMedia ? window.matchMedia : null,
    noSsr = false,
    ssrMatchMedia = null,
  } = {
    ...options,
  };

  const [match, setMatch] = React.useState(() => {
    if (noSsr && supportMatchMedia) {
      return matchMedia!(query).matches;
    }
    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches;
    }

    return defaultMatches;
  });

  React.useEffect(() => {
    let active = true;

    if (!supportMatchMedia) {
      return undefined;
    }

    const queryList = matchMedia!(query);
    const updateMatch = () => {
      if (active) {
        setMatch(queryList.matches);
      }
    };
    updateMatch();
    queryList.addEventListener('change', updateMatch);
    return () => {
      active = false;
      queryList.removeEventListener('change', updateMatch);
    };
  }, [query, matchMedia, supportMatchMedia]);

  return match;
}
