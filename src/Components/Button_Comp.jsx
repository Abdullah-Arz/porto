import React from "react";
import Button from 'react-bootstrap/Button';

function Button_Comp({text,disable}) {
  return (
    disable ? (
    <Button variant="primary" size="lg" active disabled >
  {text}
</Button>
  ) : (
    <Button variant="primary" size="lg" active >
  {text}
</Button>
  )
  )
}

export default Button_Comp;
