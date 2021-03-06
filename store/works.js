export const state = () => ({
  works: {
    website: [
      { 
        id: 'appeticrez',
        name: 'AppetiCrez', 
        folder: 'appeticrez',
        image: {
          name: 'viewproducts.png',
          description: 'View Products Page'
        },
        type: 'website',
        all_images : [
          {
            name: 'viewproducts.png',
            description: 'View Products Page'
          },
          {
            name: 'viewcategories.png',
            description: 'View Categories Page'
          },
          {
            name: 'insertproduct.png',
            description: 'Insert Product Page'
          },
          {
            name: 'insertcategory.png',
            description: 'Insert Category Page'
          },
          {
            name: 'editproduct.png',
            description: 'Edit Product Page'
          },
          {
            name: 'editcategory.png',
            description: 'Edit Category Page'
          },
        ],
        description: 'AppetiCrez is a simple website for NAR20-2 (New Assistant Recruitment for 20-2 generation) case about CRUD in Laravel. All of the data in this website are dummy data and are stored in MySQL database, and this website is not made for commercial purposes. This website is about a cafe menu management, where we can insert, edit, delete, and view all the products and categories. This website is not responsive and using 1366x768 device is recommended.',
        link: 'http://appeticrez.dreyychen.com'
      },
      { 
        id: 'clovery',
        name: 'Clovery', 
        folder: 'clovery',
        image: {
          name: 'home.png',
          description: 'Home Page'
        },
        type: 'website',
        all_images : [
          {
            name: 'login.png',
            description: 'Login Page'
          },
          {
            name: 'register.png',
            description: 'Register Page'
          },
          {
            name: 'home.png',
            description: 'Home Page'
          },
          {
            name: 'products.png',
            description: 'Products Page'
          },
          {
            name: 'manageuser.png',
            description: 'Manage User Page'
          },
        ],
        description: 'Clovery is a simple website for demonstrating Middleware and Custom Error Page in Laravel. All the data and images in this website are dummy and are stored in MySQL database, and this website is not made for commercial purposes. This website is about an ornamental plant shop, where the guest only can visit the home page, the user can visit home and products page, and admin can visit all pages. You can log in as admin with \"audrey@clovery.com\" as the email address and \"audrey123\" as the password. This website is not responsive and using 1366x768 device is recommended.',
        link: 'http://clovery.dreyychen.com'
      },
	  { 
        id: 'moussebite',
        name: 'MousseBite', 
        folder: 'moussebite',
        image: {
          name: 'home.png',
          description: 'Home Page'
        },
        type: 'website',
        all_images : [
          {
            name: 'home.png',
            description: 'Home Page'
          },
          {
            name: 'mousse.png',
            description: 'Mousse Page'
          },
          {
            name: 'cart.png',
            description: 'Cart Page'
          },
          {
            name: 'profile.png',
            description: 'Profile Page'
          },
          {
            name: 'about.png',
            description: 'About Page'
          },
          {
            name: 'login.png',
            description: 'Login Page'
          },
		  {
            name: 'register.png',
            description: 'Register Page'
          },
        ],
        description: 'MousseBite is a simple website for Entrepreneurship project. All of the data in this website are dummy data and are stored in MySQL database, and this website is not made for commercial purposes. This website is about mousse dessert online store, where we can view all the products, add to cart, buy the mousse, and view the transaction history. This website is not responsive and using 1366x768 device is recommended.',
        link: 'http://moussebite.dreyychen.com'
      }
    ],
    non_website: [
      { 
        id: 'awcute',
        name: 'AwCute', 
        folder: 'awcute', 
        image: {
          name: 'home.png',
          description: 'Home'
        },
        type: 'non-website',
        all_images: [
          {
            name: 'login.png',
            description: 'Login'
          },
          {
            name: 'register.png',
            description: 'Register'
          },
          {
            name: 'home.png',
            description: 'Home'
          },
          {
            name: 'animals.png',
            description: 'Animals'
          },
          {
            name: 'detail.png',
            description: 'Detail'
          },
          {
            name: 'cart.png',
            description: 'Cart'
          },
          {
            name: 'custommessage.png',
            description: 'Custom Message'
          },
        ],
        description: 'AwCute is a simple application for NAR20-2 (New Assistant Recruitment for 20-2 generation) case about GUI in Java. All of the data and images in this application are dummy, and this application is not made for commercial purposes. This application is about a petshop, where we can view and buy animals.'
      }
    ]
  }
})

export const getters = {
  get(state) {
      return state.works
  }
}