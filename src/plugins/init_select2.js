// 1. importar o plugin
import $ from 'jquery';
import 'select2';

// 2. criar a função
const initSelect2 = () => {
  const options = {
    width: '100%'
  };
  $('.select2').select2(options);
};

// 3. exportar a função
export { initSelect2 };