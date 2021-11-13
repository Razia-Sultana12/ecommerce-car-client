import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

import Explor from './Explor/Explor';

const explore= [{
    "title":"BMW i8",
    "description":"Rent Luxury Car In Dubai. Free Results 24/7 For You! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast, 99% Match.",
    "price":"$25000",
    "image":"https://static.cargurus.com/images/site/2017/07/14/11/10/2017_bmw_i8-pic-2602213101328646769-1600x1200.jpeg"
},
{
    "title":"BMW m8",
    "description":"Rent Luxury Car In Dubai. Free Results 24/7 For You! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast, 99% Match.",
    "price":"$20000",
    "image":"https://avatars.mds.yandex.net/i?id=1d549ff334fb1c9404d0a32c9df18835-4478965-images-thumbs&n=13"
    },
    {
        "title":"BMW x8",
        "description":"Rent Luxury Car In Dubai. Free Results 24/7 For You! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast, 99% Match.",
        "price":"$15000",
        "image":"https://i.ya-webdesign.com/images/jaguar-transparent-black-and-white-18.png"
    },
    {
        "title":"BMW m85i",
        "description":"Rent Luxury Car In Dubai. Free Results 24/7 For You! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast, 99% Match.",
        "price":"$17500",
        "image":"http://carinpicture.com/wp-content/uploads/2013/05/AC-Schnitzer-bmw-3-series-acs3-2-8i-f30-2012-Photo-05.jpg"},
    {
        "title":"BMW m850i",
        "description":"Rent Luxury Car In Dubai. Free Results 24/7 For You! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast, 99% Match.",
        "price":"$10000",
        "image":"https://www.car-revs-daily.com/wp-content/uploads/2014/11/AC-Schnitzer-BMW-228i-and-235i-8.jpg"},
{
    "title":"BMW x5",
    "description":"Rent Luxury Car In Dubai. Free Results 24/7 For You! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast, 99% Match.",
    "price":"$15600",
    "image":"https://m.media-amazon.com/images/I/71OYJDyiu+L.jpg"
},
{
    "title":"BMW m5",
    "description":"Rent Luxury Car In Dubai. Free Results 24/7 For You! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast, 99% Match.",
    "price":"$10900",
    "image":"https://cdn-bdubai.busydubai.com/auto/2132.jpg"
},
{
    "title":"BMW x3",
    "description":"Rent Luxury Car In Dubai. Free Results 24/7 For You! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast, 99% Match.",
    "price":"$15900",
    "image":"https://static.toiimg.com/img/75618547/Master.jpg"
},

{
    "title":"BMW i3",
    "description":"Rent Luxury Car In Dubai. Free Results 24/7 For You! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast, 99% Match.",
    "price":"$13000",
    "image":"http://data.3dtuning.com/tun/tgW_Eg1vFg.png"
},
{
    "title":"BMW i7",
    "description":"Rent Luxury Car In Dubai. Free Results 24/7 For You! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast, 99% Match.",
    "price":"$17700",
    "image":"http://data.3dtuning.com/tun/jp2UznUAKp.jpg"
},
{
    "title":"BMW x7",
    "description":"Rent Luxury Car In Dubai. Free Results 24/7 For You! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast, 99% Match.",
    "price":"$15400",
    "image":"https://avatars.mds.yandex.net/get-altay/3905724/2a0000017564664b7bb7638551235291279a/XXL"
},

{
    "title":"BMW x6",
    "description":"Rent Luxury Car In Dubai. Free Results 24/7 For You! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast, 99% Match.",
    "price":"$15500",
    "image":"https://avatars.mds.yandex.net/i?id=484bd61c4143f6d39ec0d5ee81001f73-5221533-images-thumbs&n=13"
},
{
    "title":"BMW Gran Coupe 2020",
    "description":"Rent Luxury Car In Dubai. Free Results 24/7 For You! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast, 99% Match.",
    "price":"$17770",
    "image":"https://carwow-uk-2.imgix.net/model-photos/original/nissan_13gtr1a_lowaggressive_daytona-blue-metallic.png"
},
{
    "title":"BMW v1",
    "description":"Rent Luxury Car In Dubai. Free Results 24/7 For You! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast, 99% Match.",
    "price":"$14300",
    "image":"https://4.bp.blogspot.com/-yp6nicMpUlQ/Vr4OsO4AMBI/AAAAAAAAA0s/x_fvOvyl3KI/w1200-h630-p-k-no-nu/Arden-Jaguar-XKR-AJ-20-Coupe.jpg"
},
{
    "title":"BMW VL4",
    "description":"Rent Luxury Car In Dubai. Free Results 24/7 For You! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast, 99% Match.",
    "price":"$17000",
    "image":"https://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-Aston-Martin-Dragon-88-Gold-Car-PNG-Image.png"
},
{
    "title":"BMW vx9",
    "description":"Rent Luxury Car In Dubai. Free Results 24/7 For You! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast, 99% Match.",
    "price":"$15400",
    "image":"https://avatars.mds.yandex.net/i?id=00534ab9b35bfd369b31dcd82cb0fbbb-5459902-images-thumbs&n=13"
},

{
    "title":"BMW i5",
    "description":"Rent Luxury Car In Dubai. Free Results 24/7 For You! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast, 99% Match.",
    "price":"$19000",
    "image":"https://auto-planeta.pl/wp-content/uploads/2020/07/BMW-M2-1228x689-1-736x414.png"
}]

const Explore = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
        {explore.map(explor=><Explor
        key={explor.title}
        explor={explor}></Explor>)}
      </Grid>
      </Container>
    </Box>
    );
};

export default Explore;