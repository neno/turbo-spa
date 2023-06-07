import { Button, Header } from 'ui';

export interface HeroProps {
  name: string;
}

export const Hero = ({ name }: HeroProps) => {
  const showAlert = () => {
    alert(`Hello ${name}!`);
  };
  return (
    <div>
      <Header text='My Hero Component' />
      <Button handleClick={showAlert}>Click Me!</Button>
    </div>
  );
};
