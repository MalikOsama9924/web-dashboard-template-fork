import type { ReduxStoreTypes } from "@/redux/slices/index.slice";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

export const useReduxUser = () => {
  return useSelector((state: ReduxStoreTypes) => state.authUser.user);
};

/**
 * useToggleState hook
 * @param  initialState - initial state of toggle
 * @returns  [state, toggleState] - state and toggleState function
 */
export const useToggleState = (initialState = false): [boolean, () => void] => {
  // state
  const [state, setState] = useState(initialState);

  /**
   * toggleState function
   */
  const toggleState = () => setState(!state);

  return [state, toggleState];
};

type SubmitHandlerOptions = {
  onSubmit: () => Promise<any>;
  onSuccess?: (_data: any) => void;
  onError?: (_error: any) => void;
  onFinally?: () => void;
  successMsg?: string;
  loadingMsg?: string;
  showToast?: boolean;
};

export const useSubmitHandler = () => {
  // state
  const [submitLoading, setSubmitLoading] = useState(false);

  const submitHandler = async ({
    onSubmit = async () => {},
    onSuccess = () => {},
    onError = () => {},
    onFinally = () => {},
    loadingMsg = "In progress...",
    successMsg = "Operation successful",
    showToast = true,
  }: SubmitHandlerOptions) => {
    let toastID;
    if (showToast) {
      toastID = toast.loading(loadingMsg);
    }

    try {
      setSubmitLoading(true);
      const data = await onSubmit();
      if (showToast) {
        toast.success(successMsg, {
          id: toastID,
        });
      }
      if (onSuccess) {
        onSuccess(data);
      }
    } catch (error: any) {
      if (showToast) {
        toast.error(error?.message || "Api error", {
          id: toastID,
        });
      }
      if (onError) {
        onError(error);
      }
    } finally {
      setSubmitLoading(false);
      if (onFinally) {
        onFinally();
      }
    }
  };

  return { submitHandler, submitLoading };
};
