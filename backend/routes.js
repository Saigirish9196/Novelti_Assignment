const express = require('express');
const User = require('./model');
const slugify = require('slugify');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const _ = require('lodash');
const { errorHandler } = require('./helper/errorhandle');

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World!')
})


router.post('/register',upload.single('photo'),async (req, res) => {
  
  const {firstName,lastName,email,mobile,address1,
    address2,state,country,zipCode}  = req.body;

  const new_user = {
        firstName,
        lastName,
        email,
        mobile,
        address1,address2,state,country,zipCode
    }

    new_user.slug = slugify(email).toLowerCase();

    if (req.file) {
      if (req.file.size > 10000000) {
        return res.status(200).json({
          error: 'Image should be less than 1MB in size',
        });
      }
      new_user.photo = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }
   
   try {
      const user = new User(new_user)
      await  user.save()
      res.status(200).json({ result: "successfuly register " });
    
   } catch (err) {
    res.json({ error:errorHandler(err) });
   }
   
})

router.get('/read',async (req,res)=>{
  try{
    const users = await User.find()
    .select('_id firstName lastName slug email mobile state country address1 address2 zipCode')
    res.json(users)
  }catch(err){
    return res.json({
      error: errorHandler(err)
    });
  }
})

router.get('/photo/:slug',async (req,res)=>{
  const slug = req.params.slug.toLowerCase();
  try {
    const user = await User.findOne({slug})
    if (user.photo.data) {
      res.set('Content-Type', user.photo.contentType);
      return res.send(user.photo.data);
    }
    
  } catch (err) {

    console.log(err)

    return res.status(200).json({
      error:"no photo"
    });
  }
})


router.put('/update/:slug',upload.single('photo'), async (req,res)=>{
  const slug = req.params.slug.toLowerCase();
  
  await User.findOne({slug}).then(async (data,err) => {
     if(err || !data){
        return res.status(200).json({error:errorHandler(err)})
     }
     let slugBeforeMerge = data.slug;

     data = _.merge(data,req.body)

     data.slug = slugBeforeMerge

     if (req.file) {
      if (req.file.size > 10000000) {
        return res.status(200).json({
          error: 'Image should be less than 1MB in size',
        });
      }
      data.photo = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }     
    
    await data.save()
    .then((user)=>{
      res.status(200).json({ result: "sucessfully update"});
     })
     .catch(err => res.json({error:errorHandler(err)}))

  })
})



router.delete('/delete/:slug',async (req,res)=>{
  const slug = req.params.slug.toLowerCase();

  await User.deleteOne().then(data => res.status(200).json({message:"successfuly Delete TagItem"}))
  .catch(err => res.json({error:errorHandler(err)}))

})


module.exports = router;