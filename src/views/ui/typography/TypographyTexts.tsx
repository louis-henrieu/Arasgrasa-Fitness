import Card from'@mui/material/Card';import{styled}from'@mui/material/styles';import CardHeader from'@mui/material/CardHeader';import Typography from'@mui/material/Typography';import CardContent from'@mui/material/CardContent';import Grid,{GridProps}from'@mui/material/Grid';const DemoGrid=styled(Grid)<GridProps>(({theme})=>({[theme.breakpoints.down('sm')]:{paddingTop:`${theme.spacing(1)} !important`}}));const TypographyTexts=()=>{return(<Card><CardHeader title='Texts' /><CardContent><Grid container spacing={6}><Grid item xs={12}sm={2}sx={{ display: 'flex', alignItems: 'center' }}><Typography>subtitle1</Typography>
  </Grid><DemoGrid item xs={12} sm={10}><Typography variant='subtitle1'sx={{ mb: 2 }}>Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
    <Typography variant='body2'>font-size: 16px /line-height:28px/font-weight:400</Typography>
  </DemoGrid><Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}><Typography>subtitle2</Typography>
  </Grid><DemoGrid item xs={12} sm={10}><Typography variant='subtitle2'sx={{ mb: 2 }}>Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
    <Typography variant='body2'>font-size: 14px /line-height:18px/font-weight:500</Typography>
  </DemoGrid><Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}><Typography>body1</Typography>
  </Grid><DemoGrid item xs={12} sm={10}><Typography sx={{ mb: 2 }}>Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
    <Typography variant='body2'>font-size: 15px /line-height:22px/font-weight:400</Typography>
  </DemoGrid><Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}><Typography>body2</Typography>
  </Grid><DemoGrid item xs={12} sm={10}><Typography variant='body2'sx={{ mb: 2 }}>Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
    <Typography variant='body2'>font-size: 13px /line-height:20px/font-weight:400</Typography>
  </DemoGrid><Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}><Typography>button</Typography>
  </Grid><DemoGrid item xs={12} sm={10}><Typography variant='button'>Button Text</Typography>
    <Typography variant='body2' sx={{ mt: 2 }}>
      font-size: 15px /line-height:18px/font-weight:500/letter-spacing:0.43px</Typography>
  </DemoGrid><Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}><Typography>caption</Typography>
  </Grid><DemoGrid item xs={12} sm={10}><Typography variant='caption'>Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
    <Typography variant='body2' sx={{ mt: 2 }}>
      font-size: 11px /line-height:14px/font-weight:400</Typography>
  </DemoGrid><Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}><Typography>overline</Typography>
  </Grid><DemoGrid item xs={12} sm={10}><Typography variant='overline'>Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
    <Typography variant='body2' sx={{ mt: 1 }}>
      font-size: 12px /line-height:32px/font-weight:400/text-transform:uppercase</Typography>
  </DemoGrid></Grid></CardContent>
</Card>)}
export default TypographyTexts;