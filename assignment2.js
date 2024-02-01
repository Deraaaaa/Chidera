const apiResponse = {
    status: 'success',
    data: {
    users: [
    {

     id: 1,
     name: 'John Doe',
    email: 'john@example.com',
     posts: [
     {
     postId: 101,
     title: 'First Post',
   content: 'This is the content of the first post',
    },
    ],
  },
    
    {
   id: 2,
   name: 'Jane Doe',
  email: 'jane@example.com',
   posts: [
   {
     postId: 201,
    title: 'Introduction',
    content: 'Hello, this is Jane introducing herself.',
     },
   ]
   },

    ]
    },
   };
    

  //To get the ID of the SECOND USER and the POST ID of the SECOND USER

  const secondUserId = apiResponse.data.users[1].id;
  console.log(secondUserId);
  

  //To get the post ID of the second user
  console.log(apiResponse.data.users[1].posts[0].postId)


  //To Change the first user name value to “LOCTECH ACADEMY”
  console.log(apiResponse.data.users[0].name = 'LOCTECH ACADEMY')


  //To Update the content value of the second user post in the above code
  console.log(apiResponse.data.users[1].posts[2] = 'Introducing herself as a fine girl')

  //Second question
  const COUNTRY = {
    USA: "North America",
    Japan: "Asia",
    Brazil: "South America",
    France: "Europe",
    SouthAfrica: "Africa",
  }
  
  //To Access values
  console.log(COUNTRY["USA"]); 
  console.log(COUNTRY["Japan"])

