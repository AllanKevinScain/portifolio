import { useCallback } from "react";

type CookieOptions = {
  expires?: number | Date;
  path?: string;
  secure?: boolean;
  sameSite?: "Strict" | "Lax" | "None";
};

export function useCookie() {
  const getCookie = useCallback((name: string) => {
    if (typeof document === "undefined") return null;

    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)"),
    );

    if (!match) return null;

    try {
      return JSON.parse(decodeURIComponent(match[2]));
    } catch {
      return decodeURIComponent(match[2]);
    }
  }, []);

  const setCookie = useCallback(
    (name: string, value: unknown, options?: CookieOptions) => {
      if (typeof document === "undefined") return;

      let cookie = `${name}=${encodeURIComponent(
        typeof value === "string" ? value : JSON.stringify(value),
      )}`;

      if (options?.expires) {
        let expires = "";

        if (typeof options.expires === "number") {
          const date = new Date();
          date.setTime(date.getTime() + options.expires * 86400000);
          expires = date.toUTCString();
        } else {
          expires = options.expires.toUTCString();
        }

        cookie += `; expires=${expires}`;
      }

      cookie += `; path=${options?.path ?? "/"}`;

      if (options?.secure) {
        cookie += "; secure";
      }

      if (options?.sameSite) {
        cookie += `; samesite=${options.sameSite}`;
      }

      document.cookie = cookie;
    },
    [],
  );

  const deleteCookie = useCallback((name: string, path: string = "/") => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`;
  }, []);

  return {
    getCookie,
    setCookie,
    deleteCookie,
  };
}
