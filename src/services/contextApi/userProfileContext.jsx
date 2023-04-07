const { createContext } = require("react");

const UserProfileContext = createContext();

const UserProfileProvider = ({ children }) => {
  const userProfileInfo = {
    name: "Luis Nestares",
    nickname: "luisfer.nest",
    profileImage:
      "https://scontent.flim1-2.fna.fbcdn.net/v/t1.6435-9/48403215_10215336486219736_5286308016352657408_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KEcnl62fmtcAX9d6lRb&_nc_ht=scontent.flim1-2.fna&oh=00_AfDSw6WGtdiMr1wbBgiB3GB97s8hpBgJoZO-PLuufGM0Rg&oe=6457C6AA",
    followers: {
      amount: "3M",
      list: [
        {
          name: "John Doe",
          username: "johndoe",
          profileImage: "https://paramotoroutlet.com/jpg/1594668408164.jpg",
        },
        {
          name: "John Doe",
          username: "johndoe",
          profileImage:
            "https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/E12KS1G65-W0168RE00G7-133faf432639-512.jpeg",
        },
        {
          name: "John Doe",
          username: "johndoe",
          profileImage:
            "https://www.morganstanley.com/content/dam/msdotcom/people/tiles/miriam-faghihi.jpg.img.490.medium.jpg/1595876429967.jpg",
        },
      ],
    },
    following: {
      amount: "2M",
      list: [
        {
          name: "John Doe",
          username: "johndoe",
          profileImage:
            "https://www.phdmedia.com/hungary/wp-content/uploads/sites/61/2015/05/temp-people-profile.jpg",
        },
        {
          name: "John Doe",
          username: "johndoe",
          profileImage:
            "https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000",
        },
        {
          name: "John Doe",
          username: "johndoe",
          profileImage:
            "https://photof8.com/wp-content/uploads/2017/01/WSS500.jpg",
        },
      ],
    },
    closeFriends: {
      amount: "1.5M",
      list: [
        {
          name: "John Doe",
          username: "johndoe",
          profileImage:
            "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg",
        },
        {
          name: "John Doe",
          username: "johndoe",
          profileImage:
            "https://media.istockphoto.com/id/1368424494/photo/studio-portrait-of-a-cheerful-woman.jpg?b=1&s=170667a&w=0&k=20&c=VEE1756TeCzYH2uPsFZ_P8H3Di2j_jw8aOT6zd7V8JY=",
        },
        {
          name: "John Doe",
          username: "johndoe",
          profileImage:
            "https://www.mckinsey.com/~/media/mckinsey/careers%20redesign/meet%20our%20people/profiles/alex/alex-sierra_profile_1536x1152.jpg?mw=400&car=2:2",
        },
      ],
    },
    profileDescription: "Software Developer and Tennis Player 🎾",
    socialUrl: "https://www.instagram.com/luisfer.nest/",
    driftVideos: {
      amount: 26,
      list: [
        {
          id: 1,
          videoUrl:
            "https://media4.giphy.com/media/3o7budsaks9ABZC0es/giphy.gif",
        },
        {
          id: 2,
          videoUrl:
            "https://i.pinimg.com/originals/65/fa/77/65fa779c46ae2590f848e9d661fa8ac9.gif",
        },
        {
          id: 3,
          videoUrl:
            "https://media.tenor.com/6WhtdRHvRmAAAAAd/trying-to-slow-down-my-snowboard-red-bull.gif",
        },
      ],
    },
    videos: {
      amount: 3,
      list: [
        {
          id: 1,
          title: "Hot Air Ballons",
          description: "In Mexico City.",
          public: true,
          videoUrl:
            "https://www.localguidesconnect.com/t5/image/serverpage/image-id/742333i5C41C246BFD1CC8A/image-size/large?v=v2&px=999",
          views: {
            amount: "5M",
            list: [
              {
                name: "John Doe",
                username: "johndoe",
                profileImage:
                  "https://paramotoroutlet.com/jpg/1594668408164.jpg",
              },
              {
                name: "John Doe",
                username: "johndoe",
                profileImage:
                  "https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/E12KS1G65-W0168RE00G7-133faf432639-512.jpeg",
              },
              {
                name: "John Doe",
                username: "johndoe",
                profileImage:
                  "https://www.morganstanley.com/content/dam/msdotcom/people/tiles/miriam-faghihi.jpg.img.490.medium.jpg/1595876429967.jpg",
              },
            ],
          },
        },
        {
          id: 2,
          title: "Snowboarding Time",
          description: "In Cerro Catedral, Argentina.",
          public: false,
          videoUrl:
            "https://media2.giphy.com/media/igyykvrwP6Mgzrd44v/giphy.gif?cid=6c09b952a652e1f1d998e1d10b55664db9577ea6be6dea39&rid=giphy.gif&ct=g",
          views: {
            amount: "4M",
            list: [
              {
                name: "John Doe",
                username: "johndoe",
                profileImage:
                  "https://www.phdmedia.com/hungary/wp-content/uploads/sites/61/2015/05/temp-people-profile.jpg",
              },
              {
                name: "John Doe",
                username: "johndoe",
                profileImage:
                  "https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000",
              },
              {
                name: "John Doe",
                username: "johndoe",
                profileImage:
                  "https://photof8.com/wp-content/uploads/2017/01/WSS500.jpg",
              },
            ],
          },
        },
        {
          id: 3,
          title: "Machu Picchu",
          description: "One of the 7 wonders of the world, Peru.",
          public: true,
          videoUrl:
            "https://i.pinimg.com/originals/ba/a4/ab/baa4ab1370fc0f771f4d762ec850d0d0.gif",
          views: {
            amount: "2.55M",
            list: [
              {
                name: "John Doe",
                username: "johndoe",
                profileImage:
                  "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg",
              },
              {
                name: "John Doe",
                username: "johndoe",
                profileImage:
                  "https://media.istockphoto.com/id/1368424494/photo/studio-portrait-of-a-cheerful-woman.jpg?b=1&s=170667a&w=0&k=20&c=VEE1756TeCzYH2uPsFZ_P8H3Di2j_jw8aOT6zd7V8JY=",
              },
              {
                name: "John Doe",
                username: "johndoe",
                profileImage:
                  "https://www.mckinsey.com/~/media/mckinsey/careers%20redesign/meet%20our%20people/profiles/alex/alex-sierra_profile_1536x1152.jpg?mw=400&car=2:2",
              },
            ],
          },
        },
      ],
    },
  };
  return (
    <UserProfileContext.Provider value={{ userProfileInfo }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export { UserProfileContext, UserProfileProvider };
