const category=[
   {path:"/category/lifestyle", name:"lifestyle posts"},{path:"/category/culture",name:"culture posts"},{path:"/category/IT",name:"IT posts"}
]



const blog =[{path:"/blog/featured",name:"featured posts"},{path:"/blog/single/:blogId",name:"standard single posts"},{path:"/blog/video",name:"vidoe single posts"}]


const more =[{path:"/more/author",name:"author page"},{path:"/more/searchResult",name:"search result"},{path:"/*",name:"404 page"}]

export {category,blog,more}