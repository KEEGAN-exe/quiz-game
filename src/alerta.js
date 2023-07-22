import Swal from 'sweetalert2'

export function alerta(title, icon = 'success') {
  let background
  if (icon === 'error') background = '#f87171'
  else background = '#a5dc86'
  Swal.fire({
    icon,
    title,
    position: 'top',
    toast: true,
    background,
    timer: 1500,
    color: 'white',
    iconColor: 'white',
    showConfirmButton: false,
    timerProgressBar: true,
    customClass: {
      container: 'custom-alert'
    }
  })
}
