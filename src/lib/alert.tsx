import Swal from 'sweetalert2';

export const alert = () => {
  Swal.fire({
    title: 'Ups! Sorry',
    text: `This section it's still in the development process.`,
    icon: 'error',
    confirmButtonText: 'Cool'
  });
};
