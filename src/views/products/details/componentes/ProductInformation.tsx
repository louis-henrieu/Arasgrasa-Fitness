import { List, ListItem, ListItemText } from "@mui/material";
import Typography from "@mui/material/Typography";

const ProductInformation = ({ description, composition} : { description: string, composition: string[] }) => {
  return (
    <div style={{ marginTop: '2em' }}>
      <Typography variant='body1' sx={{ mb: 3 }}>
        {description}
      </Typography>
      <Typography variant='h6'>
        Composition:
      </Typography>
      <List sx={{}} dense>
        {composition.map((item, index) => (
          <ListItem key={index} >
            <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
              ~
            </Typography>
            <ListItemText sx={{ ml: 1, pb: 1, pt: 1 }}>
              <Typography variant='body2'>
                {item}
              </Typography>
            </ListItemText>
        </ListItem>
      ))}
      </List>
    </div>
  );
}

export default ProductInformation;