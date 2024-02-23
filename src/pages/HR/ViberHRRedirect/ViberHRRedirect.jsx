import { useEffect } from 'react';
import { RedirectDescription } from '../HRNav/HRNav.styled';

const ViberHRRedirect = () => {
  useEffect(() => {
    window.location.replace('viber://chat?number=+380962304176');
  }, []);

  return (
    <RedirectDescription>
      Зачекайте, перенаправляємо Вас до наших HR-ів у Viber...
    </RedirectDescription>
  );
};

export default ViberHRRedirect;
