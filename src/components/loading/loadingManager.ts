// loadingManager.ts
type LoadingHandler = (value: boolean) => void;

let loadingHandler: LoadingHandler | null = null;

export const setLoadingHandler = (handler: LoadingHandler) => {
  loadingHandler = handler;
};

export const startLoading = () => {
  if (loadingHandler) {
    loadingHandler(true);
  }
};

export const stopLoading = () => {
  if (loadingHandler) {
    loadingHandler(false);
  }
};
