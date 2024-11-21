import React from 'react'
 
 const Icons = {
   icon :{
      home:   (<svg viewBox="0 0 26 26" className="home" style={{ height: '34px', width: '24px' }}><path d="M2.25 12.8855V20.7497C2.25 21.8543 3.14543 22.7497 4.25 22.7497H8.25C8.52614 22.7497 8.75 22.5259 8.75 22.2497V17.6822V17.4997C8.75 15.1525 10.6528 13.2497 13 13.2497C15.3472 13.2497 17.25 15.1525 17.25 17.4997V17.6822V22.2497C17.25 22.5259 17.4739 22.7497 17.75 22.7497H21.75C22.8546 22.7497 23.75 21.8543 23.75 20.7497V12.8855C23.75 11.3765 23.0685 9.94815 21.8954 8.99883L16.1454 4.3454C14.3112 2.86095 11.6888 2.86095 9.85455 4.3454L4.10455 8.99883C2.93153 9.94815 2.25 11.3765 2.25 12.8855Z" fill="transparent" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" /></svg>
               ),
      search: (<svg viewBox="0 0 26 26" className="search" style={{ height: '24px', width: '24px' }}><path clipRule="evenodd" d="M3.5 11.5C3.5 7.08172 7.08172 3.5 11.5 3.5C15.9183 3.5 19.5 7.08172 19.5 11.5C19.5 15.9183 15.9183 19.5 11.5 19.5C7.08172 19.5 3.5 15.9183 3.5 11.5ZM11.5 1C5.70101 1 1 5.70101 1 11.5C1 17.299 5.70101 22 11.5 22C13.949 22 16.2023 21.1615 17.9883 19.756L22.3661 24.1339C22.8543 24.622 23.6457 24.622 24.1339 24.1339C24.622 23.6457 24.622 22.8543 24.1339 22.3661L19.756 17.9883C21.1615 16.2023 22 13.949 22 11.5C22 5.70101 17.299 1 11.5 1Z" fill="currentColor" fillRule="evenodd" /></svg>
               ),
      addpost:(<svg viewBox="0 0 12 12" className="post" style={{  height: '24px', width: '24px' }}><path d="M6 2v8m4-4H2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" /></svg>
               ),
      notify :(<svg viewBox="0 0 32 32" className="notifications" style={{ fill: 'transparent', height: '30px', width: '30px' }}><path d="M5.5 12.8568C5.5 17.224 9.22178 21.5299 15.0332 25.2032C15.3554 25.397 15.7401 25.5909 16 25.5909C16.2703 25.5909 16.655 25.397 16.9668 25.2032C22.7782 21.5299 26.5 17.224 26.5 12.8568C26.5 9.11212 23.8698 6.5 20.4599 6.5C18.4847 6.5 16.9356 7.39792 16 8.74479C15.0851 7.40812 13.5257 6.5 11.5401 6.5C8.14059 6.5 5.5 9.11212 5.5 12.8568Z" stroke="currentColor" strokeWidth="2.5" /></svg>
               ),
      profile:(<svg viewBox="0 0 26 26" className="profile" style={{ fill: 'transparent', height: '24px', width: '24px' }}><circle cx="13" cy="7.25" r="4" stroke="currentColor" strokeWidth="2.5"></circle><path d="M6.26678 23.75H19.744C21.603 23.75 22.5 23.2186 22.5 22.0673C22.5 19.3712 18.8038 15.75 13 15.75C7.19625 15.75 3.5 19.3712 3.5 22.0673C3.5 23.2186 4.39704 23.75 6.26678 23.75Z" stroke="currentColor" strokeWidth="2.5"></path></svg>
               ),
      heart : (<svg aria-label="Like" role="img" viewBox="0 0 18 18" className="x1lliihq x135i0dr x2lah0s x1f5funs x1n2onr6 x1bl4301 x1i0azm7 x73je2i xvlca1e" style={{ '--fill': 'transparent', '--height': '19px', '--width': '18.75px' } as React.CSSProperties}><title>Like</title><path d="M1.34375 7.53125L1.34375 7.54043C1.34374 8.04211 1.34372 8.76295 1.6611 9.65585C1.9795 10.5516 2.60026 11.5779 3.77681 12.7544C5.59273 14.5704 7.58105 16.0215 8.33387 16.5497C8.73525 16.8313 9.26573 16.8313 9.66705 16.5496C10.4197 16.0213 12.4074 14.5703 14.2232 12.7544C15.3997 11.5779 16.0205 10.5516 16.3389 9.65585C16.6563 8.76296 16.6563 8.04211 16.6562 7.54043V7.53125C16.6562 5.23466 15.0849 3.25 12.6562 3.25C11.5214 3.25 10.6433 3.78244 9.99228 4.45476C9.59009 4.87012 9.26356 5.3491 9 5.81533C8.73645 5.3491 8.40991 4.87012 8.00772 4.45476C7.35672 3.78244 6.47861 3.25 5.34375 3.25C2.9151 3.25 1.34375 5.23466 1.34375 7.53125Z" fill='none'  stroke="rgb(200, 200, 200)" strokeWidth="1.25" /></svg>
               ),
      LikedHeart : (<svg aria-label="Like" role="img" viewBox="0 0 18 18" className="x1lliihq x135i0dr x2lah0s x1f5funs x1n2onr6 x1bl4301 x1i0azm7 x73je2i xvlca1e" style={{ '--fill': 'transparent', '--height': '19px', '--width': '18.75px' } as React.CSSProperties}><title>Like</title><path d="M1.34375 7.53125L1.34375 7.54043C1.34374 8.04211 1.34372 8.76295 1.6611 9.65585C1.9795 10.5516 2.60026 11.5779 3.77681 12.7544C5.59273 14.5704 7.58105 16.0215 8.33387 16.5497C8.73525 16.8313 9.26573 16.8313 9.66705 16.5496C10.4197 16.0213 12.4074 14.5703 14.2232 12.7544C15.3997 11.5779 16.0205 10.5516 16.3389 9.65585C16.6563 8.76296 16.6563 8.04211 16.6562 7.54043V7.53125C16.6562 5.23466 15.0849 3.25 12.6562 3.25C11.5214 3.25 10.6433 3.78244 9.99228 4.45476C9.59009 4.87012 9.26356 5.3491 9 5.81533C8.73645 5.3491 8.40991 4.87012 8.00772 4.45476C7.35672 3.78244 6.47861 3.25 5.34375 3.25C2.9151 3.25 1.34375 5.23466 1.34375 7.53125Z" fill='red'  stroke="none" strokeWidth="1.25" /></svg>
               ),
      comment:(<svg aria-label="Reply" role="img" viewBox="0 0 18 18" className="x1lliihq x2lah0s x1f5funs x1n2onr6 x1bl4301 x1i0azm7 xbh8q5q x73je2i x1f6yumg xvlca1e" style={{ '--fill': 'currentColor', '--height': '18px', '--width': '18px' } as React.CSSProperties}><title>Reply</title><path d="M15.376 13.2177L16.2861 16.7955L12.7106 15.8848C12.6781 15.8848 12.6131 15.8848 12.5806 15.8848C11.3779 16.5678 9.94767 16.8931 8.41995 16.7955C4.94194 16.5353 2.08152 13.7381 1.72397 10.2578C1.2689 5.63919 5.13697 1.76863 9.75264 2.22399C13.2307 2.58177 16.0261 5.41151 16.2861 8.92429C16.4161 10.453 16.0586 11.8841 15.376 13.0876C15.376 13.1526 15.376 13.1852 15.376 13.2177Z" fill='none' stroke="rgb(200, 200, 200)" strokeLinejoin="round" strokeWidth="1.25" /></svg>
               ),
      repost: (<svg aria-label="Repost" role="img" viewBox="0 0 18 18" className="x1lliihq x135i0dr x2lah0s x1f5funs x1n2onr6 x1bl4301 x1i0azm7" style={{ '--fill': 'white', '--height': '18px', '--width': '18px' } as React.CSSProperties}><title>Repost</title><path d="M6.41256 1.23531C6.6349 0.971277 7.02918 0.937481 7.29321 1.15982L9.96509 3.40982C10.1022 3.52528 10.1831 3.69404 10.1873 3.87324C10.1915 4.05243 10.1186 4.2248 9.98706 4.34656L7.31518 6.81971C7.06186 7.05419 6.66643 7.03892 6.43196 6.7856C6.19748 6.53228 6.21275 6.13685 6.46607 5.90237L7.9672 4.51289H5.20312C3.68434 4.51289 2.45312 5.74411 2.45312 7.26289V9.51289V11.7629C2.45312 13.2817 3.68434 14.5129 5.20312 14.5129C5.5483 14.5129 5.82812 14.7927 5.82812 15.1379C5.82812 15.4831 5.5483 15.7629 5.20312 15.7629C2.99399 15.7629 1.20312 13.972 1.20312 11.7629V9.51289V7.26289C1.20312 5.05375 2.99399 3.26289 5.20312 3.26289H7.85002L6.48804 2.11596C6.22401 1.89362 6.19021 1.49934 6.41256 1.23531Z" fill="rgb(200, 200, 200)" stroke="rgb(200, 200, 200)" strokeLinejoin="round" strokeWidth="0.1"></path><path d="M11.5874 17.7904C11.3651 18.0545 10.9708 18.0883 10.7068 17.8659L8.03491 15.6159C7.89781 15.5005 7.81687 15.3317 7.81267 15.1525C7.80847 14.9733 7.8814 14.801 8.01294 14.6792L10.6848 12.206C10.9381 11.9716 11.3336 11.9868 11.568 12.2402C11.8025 12.4935 11.7872 12.8889 11.5339 13.1234L10.0328 14.5129H12.7969C14.3157 14.5129 15.5469 13.2816 15.5469 11.7629V9.51286V7.26286C15.5469 5.74408 14.3157 4.51286 12.7969 4.51286C12.4517 4.51286 12.1719 4.23304 12.1719 3.88786C12.1719 3.54269 12.4517 3.26286 12.7969 3.26286C15.006 3.26286 16.7969 5.05373 16.7969 7.26286V9.51286V11.7629C16.7969 13.972 15.006 15.7629 12.7969 15.7629H10.15L11.512 16.9098C11.776 17.1321 11.8098 17.5264 11.5874 17.7904Z" fill="rgb(200, 200, 200)" stroke="rgb(200, 200, 200)" strokeLinejoin="round" strokeWidth="0.1"></path></svg>
               ),
      share:  (<svg aria-label="Share" role="img" viewBox="0 0 18 18" className="x1lliihq x2lah0s x1f5funs x1n2onr6 x1bl4301 x1i0azm7 xbh8q5q x73je2i x1f6yumg xvlca1e" style={{ '--fill': 'currentColor', '--height': '18px', '--width': '18px' } as React.CSSProperties}><title>Share</title><path d="M15.6097 4.09082L6.65039 9.11104" stroke="rgb(200, 200, 200)" fill="none" strokeLinejoin="round" strokeWidth="1.25"></path><path d="M7.79128 14.439C8.00463 15.3275 8.11131 15.7718 8.33426 15.932C8.52764 16.071 8.77617 16.1081 9.00173 16.0318C9.26179 15.9438 9.49373 15.5501 9.95761 14.7628L15.5444 5.2809C15.8883 4.69727 16.0603 4.40546 16.0365 4.16566C16.0159 3.95653 15.9071 3.76612 15.7374 3.64215C15.5428 3.5 15.2041 3.5 14.5267 3.5H3.71404C2.81451 3.5 2.36474 3.5 2.15744 3.67754C1.97758 3.83158 1.88253 4.06254 1.90186 4.29856C1.92415 4.57059 2.24363 4.88716 2.88259 5.52032L6.11593 8.7243C6.26394 8.87097 6.33795 8.94431 6.39784 9.02755C6.451 9.10144 6.4958 9.18101 6.53142 9.26479C6.57153 9.35916 6.59586 9.46047 6.64451 9.66309L7.79128 14.439Z" stroke="rgb(200, 200, 200)" fill="none" strokeLinejoin="round" strokeWidth="1.25"></path></svg>             
               ),
      images: (<svg aria-label="Attach media" role="img" viewBox="0 0 24 24" className="x1lliihq x135i0dr x2lah0s x1f5funs x1n2onr6 x1bl4301 x1gaogpn" style={{ '--fill': 'currentColor', '--height': '20px', '--width': '20px' } as React.CSSProperties}><title>Attach media</title><path clipRule="evenodd" d="M2.00207 9.4959C1.65132 7.00019 1.47595 5.75234 1.82768 4.73084C2.13707 3.83231 2.72297 3.05479 3.50142 2.50971C4.38639 1.89005 5.63425 1.71467 8.12996 1.36392L10.7047 1.00207C13.2004 0.651325 14.4482 0.47595 15.4697 0.827679C16.3682 1.13707 17.1458 1.72297 17.6908 2.50142C17.9171 2.82454 18.0841 3.19605 18.2221 3.65901C17.7476 3.64611 17.2197 3.64192 16.6269 3.64055C16.5775 3.5411 16.5231 3.44881 16.4621 3.36178C16.0987 2.84282 15.5804 2.45222 14.9814 2.24596C14.3004 2.01147 13.4685 2.12839 11.8047 2.36222L7.44748 2.97458C5.78367 3.20841 4.95177 3.32533 4.36178 3.73844C3.84282 4.10182 3.45222 4.62017 3.24596 5.21919C3.01147 5.90019 3.12839 6.73209 3.36222 8.3959L3.97458 12.7531C4.15588 14.0431 4.26689 14.833 4.50015 15.3978C4.50083 16.3151 4.50509 17.0849 4.53201 17.7448C4.13891 17.4561 3.79293 17.1036 3.50971 16.6991C2.89005 15.8142 2.71467 14.5663 2.36392 12.0706L2.00207 9.4959Z"  fill="currentColor" fillRule="evenodd"></path><rect fill="none" height="15.5" rx="3.75" stroke="rgb(100, 100, 100)" strokeWidth="1.5" width="15.5" x="6.75" y="5.8894"></rect><path d="M6.6546 17.8894L8.59043 15.9536C9.1583 15.3857 10.0727 15.3658 10.6647 15.9085L12.5062 17.5966C12.9009 17.9584 13.5105 17.9451 13.8891 17.5665L17.8181 13.6376C18.4038 13.0518 19.3536 13.0518 19.9394 13.6375L22.0663 15.7644" fill="none" stroke="rgb(100, 100, 100)" strokeLinejoin="round" strokeWidth="1.5"></path><circle cx="10.75" cy="9.8894" fill="currentColor" r="1.25"></circle></svg>
               ),
      gif:    (<svg aria-label="Add a GIF" role="img" viewBox="0 0 24 24" className="x1lliihq x135i0dr x2lah0s x1f5funs x1n2onr6 x1bl4301 x1gaogpn" style={{ '--fill': 'currentColor', '--height': '20px', '--width': '20px' } as React.CSSProperties}><title>Add a GIF</title><svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><title>GIF Picker Icon</title><g clip-path="url(#:rn:)"><path d="M20.6472 13.7545L21.2766 14.1623L20.6472 13.7545C20.4715 14.0256 20.2404 14.2752 19.647 14.9058L15.4667 19.3473C14.7767 20.0804 14.5029 20.3659 14.1962 20.5791C13.785 20.8649 13.3208 21.0655 12.8308 21.169C12.4654 21.2462 12.0698 21.25 11.0631 21.25C9.62515 21.25 8.58506 21.2496 7.76313 21.1923C6.94813 21.1356 6.40373 21.0256 5.95094 20.8336C4.69662 20.3019 3.69812 19.3034 3.16638 18.0491C2.97444 17.5963 2.86444 17.0519 2.80767 16.2369C2.75042 15.4149 2.75 14.3748 2.75 12.9369V11.6C2.75 9.90747 2.75058 8.68317 2.82925 7.72029C2.90721 6.76615 3.05809 6.13493 3.32222 5.61655C3.82555 4.6287 4.6287 3.82555 5.61655 3.32222C6.13493 3.05809 6.76615 2.90721 7.72029 2.82925C8.68317 2.75058 9.90747 2.75 11.6 2.75H13.1363C14.48 2.75 15.4519 2.75037 16.2211 2.80049C16.984 2.8502 17.4953 2.94657 17.9222 3.11455C19.2784 3.64817 20.3518 4.72155 20.8855 6.07779C21.0534 6.50473 21.1498 7.01596 21.1995 7.77888C21.2496 8.54813 21.25 9.52002 21.25 10.8637C21.25 11.7295 21.2472 12.0697 21.1893 12.3875C21.1006 12.8745 20.9163 13.3391 20.6472 13.7545Z" stroke="rgb(100,100,100)" stroke-width="1.5"></path><path d="M13 21V19.3784V19.3784C13 15.8557 15.8557 13.0001 19.3784 13.0002V13.0002H21" stroke="rgb(100,100,100)" stroke-linejoin="round" stroke-width="1.5"></path><path d="M8.33957 11.406C6.68121 11.406 5.69995 10.432 5.69995 8.69756C5.69995 6.98488 6.68121 6 8.2925 6C9.33894 6 10.1283 6.44899 10.4361 6.99936C10.5121 7.14058 10.5411 7.26369 10.5411 7.39404C10.5411 7.77785 10.2731 8.04218 9.88207 8.04218C9.58153 8.04218 9.35342 7.92631 9.16513 7.67647C8.91891 7.34697 8.66907 7.20937 8.29974 7.20937C7.64798 7.20937 7.26417 7.74526 7.26417 8.67583C7.26417 9.62812 7.7023 10.1966 8.37578 10.1966C8.87546 10.1966 9.23031 9.91779 9.27376 9.49777L9.281 9.42535H8.98047C8.63648 9.42535 8.41199 9.24431 8.41199 8.91481C8.41199 8.58531 8.63286 8.40426 8.98047 8.40426H9.99069C10.4795 8.40426 10.7583 8.69393 10.7583 9.2081C10.7583 10.4501 9.89655 11.406 8.33957 11.406Z" fill="currentColor"></path><path d="M12.5259 11.406C12.0371 11.406 11.7583 11.1163 11.7583 10.6021V6.80384C11.7583 6.28967 12.0371 6 12.5259 6C13.0147 6 13.2936 6.28967 13.2936 6.80384V10.6021C13.2936 11.1163 13.0147 11.406 12.5259 11.406Z" fill="currentColor"></path><path d="M15.3112 11.3606C14.8224 11.3606 14.5436 11.0709 14.5436 10.5568V6.849C14.5436 6.33484 14.8224 6.04517 15.3112 6.04517H17.6105C18.0232 6.04517 18.2876 6.26604 18.2876 6.65709C18.2876 7.04815 18.016 7.26902 17.6105 7.26902H16.0788V8.26839H17.4548C17.8386 8.26839 18.0848 8.4784 18.0848 8.84411C18.0848 9.20981 17.8458 9.41983 17.4548 9.41983H16.0788V10.5568C16.0788 11.0709 15.8 11.3606 15.3112 11.3606Z" fill="currentColor"></path></g><defs><clipPath id=":rn:"><rect fill="white" height="20" transform="translate(2 2)" width="20"></rect></clipPath></defs></svg></svg>
               ),
      hash :  (<svg aria-label="Add a tag" role="img" viewBox="1 1 22 22" className="x1lliihq x135i0dr x2lah0s x1f5funs x1n2onr6 x1bl4301 x1gaogpn x73je2i x1owpc8m xhr4kjn" style={{ height: '20px', width: '20px', fill: 'currentColor' } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg"><title>Add a tag</title><path d="M5 8.50012H20" stroke="rgb(100, 100, 100)" strokeWidth="1.5"></path><path d="M4 15.0001H20" stroke="rgb(100, 100, 100)" strokeWidth="1.5"></path><path d="M7.59985 19.9399L10.3999 4.06036" stroke="rgb(100, 100, 100)" strokeWidth="1.5"></path><path d="M13.5999 19.9399L16.3999 4.06036" stroke="rgb(100, 100, 100)" strokeWidth="1.5"></path></svg>
               ),
      poll :  (<svg aria-label="Add a poll" role="img" viewBox="0 0 24 24" className="x1lliihq x135i0dr x2lah0s x1f5funs x1n2onr6 x1bl4301 x1gaogpn" style={{ height: '20px', width: '20px', fill: 'currentColor' } as React.CSSProperties}><title>Add a poll</title><rect fill="grey" height="1.5" rx="0.75" width="8" x="4" y="5.5" stroke="rgb(100, 100, 100)" strokeWidth="0.5"></rect><rect fill="grey" height="1.5" rx="0.75" width="16" x="4" y="11.25" stroke="rgb(100, 100, 100)" strokeWidth="0.5"></rect><rect fill="grey" height="1.5" rx="0.75" width="11" x="4" y="17" stroke="rgb(100, 100, 100)" strokeWidth="0.5"></rect></svg>
               ),
    
            }
}

 const IconStore = () => {
    return Icons
 }


 export default IconStore;