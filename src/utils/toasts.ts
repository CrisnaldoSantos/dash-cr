import { toast, ToastOptions } from 'react-toastify';

const config: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const successToast = (content: string) => toast.success(content, config);

const errorToast = (content: string) => toast.error(content, config);

const infoToast = (content: string) => toast.info(content, config);

const warningToast = (content: string) => toast.warning(content, config);

const defaultToast = (content: string) => toast(content, config);

export { successToast, errorToast, infoToast, defaultToast, warningToast };
