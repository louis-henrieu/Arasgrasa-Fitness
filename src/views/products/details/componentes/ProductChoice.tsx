import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Icon from 'src/@core/components/icon'

const Choices = ({ choices }: { choices: string[] }) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '1em', marginTop: '0.5em' }}>
      {choices.map((choice, index) => (
        <Button
          key={index}
          variant={selectedValue === choice ? 'contained' : 'outlined'}
          sx={{ mr: 1, mb: 1 }}
          onClick={() => setSelectedValue(choice)}
        >
          {choice}
        </Button>
      ))}
    </div>
  );
};

const ProductChoice = ({ choice }: { choice: { id: number, name: string, value: string[] }[] }) => {

  return (
    <Card sx={{ p: 2, mt: 3 }}>
      {choice.map((item, index) => (
        <div key={index} style={{ marginTop: '1rem' }}>
          <Typography variant='body2' sx={{ mb: 1 }}>
            {item.name}
          </Typography>
          <Choices choices={item.value} />
        </div>
      ))}
      <Button variant='contained' sx={{ mt: 5 }} fullWidth>
        <Icon icon='tabler:shopping-cart-plus' fontSize={20} style={{ marginRight: '0.5em' }} />
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductChoice;