import { Button, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'

const Enterprise = () => {
  return (
    <div>
        <Navbar/>
        <div style={{display:"flex",width:"90%",margin:'auto'}}>
            <div>
                <Heading fontSize='32px' color="#101834">Mentimeter Enterprise</Heading>
                <Heading fontSize='16px' color="#101834"> Perfect for 10+ users. Get in touch and improve engagement levels today.</Heading>
                <ol fontSize='16px' color="rgba(16, 24, 52, 0.75)">
                    <li>Increased enterprise-level security and control.</li>
                    <li>Premium support from dedicated Mentimeter experts.</li>
                    <li>Simple team management with oversights of Mentimeter usage.</li>
                    <li>Consolidated billing and scaling discounts.</li>
                </ol>
            </div>
            <div>
                <form style={{display:"flex",flexDirection:"column",margin:"auto",maxWidth:"300px",gap:"10px"}}>
                    <label>First name</label><span><label>Last name</label></span>
                    <input style={{ border: "2px solid #ccc"}} type="text" /><span><input style={{ border: "2px solid #ccc"}} type="text" /></span>
                    <label>Number of users to include in the subscription</label>
                    <input style={{ border: "2px solid #ccc"}} type="number"/>
                    <label>Work email</label>
                    <input style={{ border: "2px solid #ccc"}} type="email" />
                    <label>Phone number (optional)</label><br />
                    <input style={{ border: "2px solid #ccc"}} type="number" placeholder='+(0)123456-4890'/><br />
                    <p>Please include country regional code</p>
                    <label>Message optional</label>
                    <input style={{ border: "2px solid #ccc"}} type="text" />
                    <Button colorScheme='blue' borderRadius="none">Send</Button>
                    <p>By sending this form, you accept our terms of use and policies.</p>
                </form>
            </div>
        </div>
        <div style={{display:"flex",width:"90%",margin:'auto'}}>
            <div>
                <img style={{width:"285px", height:"162px"}} src="https://www.mentimeter.com/_next/static/media/slanted-bar-chart.e26a2f16.svg" alt="" />
                <Heading fontSize='20px' color="#101834">Increases individual and collective ownership</Heading>
            </div>
            <div>
                <img style={{width:"285px", height:"162px"}} src="https://www.mentimeter.com/_next/static/media/colorful-circles.f04baceb.svg" alt="" />
                <Heading fontSize='20px' color="#101834">Enables inclusion and collaboration</Heading>
            </div>
            <div>
                <img style={{width:"285px", height:"162px"}} src="https://www.mentimeter.com/_next/static/media/blue-heart.a757c244.svg" alt="" />
                <Heading fontSize='20px' color="#101834">Improves productivity and boost learning</Heading>
            </div>
        </div>
        <br />
        <br />
        <br />
        <div style={{width:"60%",margin:"auto"}}>
            <Heading fontSize='32px' color="#101834">Centralized control</Heading>
            <Heading fontSize='16px' color="rgba(16, 24, 52, 0.75)">Enable your team to access to full suite of Mentimeter Enterprise, centralize users in one place and gain oversight on how your users are using Mentimeter.</Heading>
        </div>
        <br />
        <br />
        <br />
        <div style={{display:"flex",width:"90%",margin:"auto"}}>
            <div>
                <img style={{width:"550px",height:'450px'}} src="https://images.ctfassets.net/rvt0uslu5yqp/5BFvB8dZXLHNn9RJWrP5mS/576cac3e32b2a595fed8d59730ef97f5/centralized-control-c55aaf78eff5b9f8b547966e802262ef.png" alt="" />
            </div>
            <div>
                <ol fontSize='16px' color="rgba(16, 24, 52, 0.75)">
                    <li>Simple team management - Invite, upgrade, and suspend individual users.</li>
                    <li>Payment and discounts - Consolidated billing and scaling discounts.</li>
                    <li>Organization settings - Create and set default branding and settings for your team's presentations.</li>
                    <li>Data settings - Ensure data privacy with custom settings.</li>
                    <li>Team & Knowledge Sharing - Share presentations with your team and control shared access.</li>
                    <li>Re-distribute licenses with SCIM - Those who need Mentimeter can get access in a secure and efficient way.</li>
                    <li>Analytics - Workspace analytics for Admins and Owners.</li>
                </ol>
                <Button colorScheme='blue' variant='outline' borderRadius='none'>Learn more</Button>
            </div>
        </div>
        <div style={{width:"90%",textAlign:"center",margin:"auto"}}>
            <br />
            <Heading fontSize='32px'>Enterprise-level security</Heading>
            <br />
            <div style={{display:"flex",textAlign:"center"}}>
                <div style={{textAlign:"center"}}>
                    <img style={{width:"285px", height:"162px"}} src="https://images.ctfassets.net/rvt0uslu5yqp/37xfC8tMToAb9uPIMcJcOe/47412b4516c5a41e6fa5cecb866e608a/P8A-0fVg.png" alt='vvss'/>
                    <Heading fontSize='20px' color="#101834">Customized Control</Heading>
                    <Heading fontSize='16px' color="rgba(16, 24, 52, 0.75)">Enable controlled and secure use of Mentimeter across your organization.</Heading>
                </div>
                <div style={{textAlign:"center"}}>
                    <img style={{width:"285px", height:"162px"}} src="https://images.ctfassets.net/rvt0uslu5yqp/5dR7dfi408lLLbmN02ZKyt/6a4862099189a4bb703df41f237ac693/I1my37Bg.png" alt='vsv'/>
                    <Heading fontSize='20px' color="#101834">GDPR & Data Protection</Heading>
                    <Heading fontSize='16px' color="rgba(16, 24, 52, 0.75)">We ensure data privacy by being committed to GDPR and other relevant laws and regulations.</Heading>
                </div>
                <div style={{textAlign:"center"}}>
                    <img style={{width:"285px", height:"162px"}} src="https://images.ctfassets.net/rvt0uslu5yqp/6flm99kP3sT3gaP3jbiFwU/fa591df5739c9a36f085c0ea5206347c/wJ70jJqw.png" alt='vav'/>
                    <Heading fontSize='20px' color="#101834">Single Sign-On (SSO)</Heading>
                    <Heading fontSize='16px' color="rgba(16, 24, 52, 0.75)">Enable employees to log in with their organization credentials. Available upon request for customers who implement Mentimeter for the entire organization.</Heading>
                </div>
            </div>
            <br />
                <Button colorScheme='blue' variant='outline' borderRadius='none'>See our Policies</Button>
        </div>
        <br />
        <br />
        <div>
            <Heading fontSize='20px' color="#101834"> Dedicated Support</Heading>
            <Heading fontSize='16px' color="rgba(16, 24, 52, 0.75)">We are experts in how Mentimeter can enhance your organization's ways of working. We will help you to grow and achieve your organization's goals. We also act as advisors on how you can run more engaging, inclusive, and transparent meetings and presentations.</Heading>
        </div>
        <br />
        <br />
        <br />
        <div style={{display:'flex',textAlign:'center',margin:'auto',width:'90%'}}>
            <div><img style={{width:"80%",height:'70%'}} src="https://images.ctfassets.net/rvt0uslu5yqp/6AJdBptKDeYlTZSG5gbhsu/3226fbfc07d4c647fe376e7b9d496a86/Mentimeter_Web_Education_2020-09.png" alt='vcv'/></div>
            {/* <Spacer/> */}
            <div style={{marginTop:'100px',lineHeight:'20px',width:'30%'}}>
                <Heading fontSize='20px' color="#101834">"Mentimeter is such a great tool for live polling. I work with teachers and they really love to do live polling and find Mentimeter very easy to use."</Heading>
                <br />
                <Heading fontSize='16px' color="blue">Mathias Elmose, Educational Developer at Aarhus University</Heading>
                <br />
                <Button colorScheme='blue' variant='outline' borderRadius='none'>Explore More Stories</Button>
            </div>
        </div>
        <div>
            <div style={{backgroundColor:"#196cff"}}>
                <Heading fontSize='32px' color="#101834">IWant to learn about what Mentimeter Enterprise can do for your organization?</Heading>
                <br />
                <Button colorScheme='blue' variant='outline' borderRadius='none'>Contact us</Button>
                <br />
                <br />
                <br />
            </div>    
        </div>
        <div style={{width:"90%",textAlign:"center",margin:"auto",display:'flex'}}>
            <div>
                <img style={{width:"250px", height:"25px"}} src="data:image/png;base64,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" alt="logo"/>
            </div>
            <Spacer/>
            <div>
                <Heading fontSize='16px' color="#101834">Features</Heading>
                <p>Overview</p>
                <p>Live Polling</p>
                <p>Word Cloud</p>
                <p>Quiz</p>
                <p>Q&A</p> 
                <p>Powerpoint</p>
                <p>Translations</p>
            </div>
            <Spacer/>
            <div>
                <Heading fontSize='16px' color="#101834">Resources</Heading>
                <hr />
                <p>Blog</p>
                <p>Solutions</p>
                <p>Templates</p>
                <p>Webinars</p>
                <p>Compaigns</p> 
                <p>Stories</p>
            </div>
            <Spacer/>
            <div>
                <Heading fontSize='16px' color="#101834">Details</Heading>
                <hr />
                <p>Terms of use</p>
                <p>Policies</p>
                <p>Accessibility</p>
                <p>Help Center</p>
                <p>Requirements</p>
            </div>
            <Spacer/>
            <div>
                <Heading fontSize='16px' color="#101834">About us</Heading>
                <hr />
                <p>Press info</p>
                <p>The Team</p>
                <p>Jobs</p>
                <p>Contect us</p>
            </div>
            <Spacer/>
            <div>
                <div> 
                    <img style={{width:'100px'}} src="https://images.ctfassets.net/rvt0uslu5yqp/JPNan1L2EJNCdjd6fW7R1/52f5e66f8167312dee85d81f7c015e78/Mentimeter_Branding_Logo_2020_RGB-11.png" alt='vv'/>
                </div>
                <div style={{display:'flex'}}>
                    <img style={{width:'30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM3eCW3OnuBtcJMsS9skHDbDdTOMhmxhrOCg&usqp=CAU" alt="" />
                    <img style={{width:'30px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAAvLy8MDAwbGxtCQkLS0tKPj4+Li4vh4eGHh4cgICDa2tpjY2P6+vqlpaV2dnY7OzuwsLDs7Oy6urpQUFBtbW0nJyfNzc3Gxsa0tLQ9PT1ISEiVlZU1NTUsLCyBgYFXV1cWFhZfX1+enp7w8PB6enqJSqg0AAAD80lEQVR4nO2d61rjIBBAu602qa29V2utva36/o+4u99u1TYMkERgkj3nN6ScT0MGGKDTAQAAAAAAAAAAAAAAaBLj5WE17Kni8Zg/fZvf6P6HUu7G3+E3Vuv3h3l9wVFqBwcPdQX7qQ2c1FRcpG6/B5Naho+pm+/DWw3BSerGezGtYZi67Z5U/2asUzfdk2Vlwyx10z05VDY8pm66J6vKht3UTfdkV9nwJnXTPdm33rCLIYbqwRBD/WCIoX4wxFA/GNY0vJ88jUb9ZTYL7SET0vC0+Sy9OESQMRLQMLssv9jH8CkSzrC4vHWM4FMkmKFp/e45jtMloQwzU5VxJKkLAhn2zHVSLAQEMpTWJmNpfSGQoVTpLpbXJ2EMf0qVEqyphjF8FWtFE/sgjKGc6nGKZnYmjGFfrLWNZnYmtuEqmtmZ2P+l8cOaMIZyqk40sQ/CGL5LlRIkqIQxFIK2TmcTTeyDQDGN1NXE70pDGQpBTYo8uFCjJ/MfMcUAMdgI2JSo8xLH6ZJghs/FGvM4SleEm6fZX+fMJUoxCjmbeJH52N9FsDERdkY47/99HQeTdFPC4Wf1991eUAMXrFtgqB8MMdQPhhjGa+huV22JtQGGq9f14vyji/Wk7G65MIbTLDeRXc2Wmkvl2Zcwb7cpDjTX0/SGI6HO1RBYevTwXGAmzPeMX1MbShNRV0NE16M3UoHf5C0wnNm3nQ2Ghh9ulOG9swV+fY5aQ59ddV4ryloN/ba3+igqNdx6NuKhsYberXDPb6k0FL+nRd6aaVhmA7YzCUmlYSlc8XjzDV37kZtv2HFMNrfAcNl6Q0f2QxsM7ZFNGwzta+e6DZeH7al3s8rX9mKNNfxa2jYYtkeneg2vUlGPlqLWLB21hoVvgCEx4MygiYZPxYdaxsQNNDTmv8kjDtsZHUoNjalF8rDY1tXoNBQCsYFU3pbIotNQGBG9SOVtg0SVhlKQMpMq2IJvlYbinL1UwdDz6jYUOw6pN7VtVFFpKObZSud22WJvlYbiYX7SFJUtqFFpKK65SJ1p4wzFR+etN7zDEEMMMcQQQwwxxBBDDDHEEEMMMcQQQwwxxBBDDDHEEEMMMcQQQwwxxBDD/89QzInSkzE07xsZXR33MBKKiY9+EGrEzy/VBIYY6gdDDPWDIYb6wRBD/WAok+SKsQrcVjb0OKJJBe5T0STETYLKEDeeOrFugleEfKuPk0Q3NpaluqDr5BslGK8p9MW2z18Npns2vGnCm1jmYDQDaa7kKIPv6YQi2r8Yw7qCSe5vKkG31kv4j4Hi7ka8Oawky1TXqzg4+h8v6WQwmW5vVbF6n9sPIQYAAAAAAAAAAAAAANDGL7YZd1brXhwbAAAAAElFTkSuQmCC" alt="" />
                    <img style={{width:'30px'}} src="data:image/png;base64,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" alt="" />
                    <img style={{width:'30px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADy8vIhISFBQUHr6+ufn58WFhba2tr5+fnV1dXm5ub29vbv7++7u7vDw8NZWVmrq6tpaWmNjY11dXWlpaUyMjIMDAx/f39kZGSysrI0NDRPT09FRUUmJibg4ODKyso6OjqUlJRUVFRxcXF7e3uFhYWQ6cJiAAAJ5ElEQVR4nO1da2OiMBBsxQcIqKCi0mr12vr/f+LVWq8WZvOADWzh5uNdtBmTbHY3s8nDgz2CcL4+716Hmbd5bAIbLxu+7s7reRhU6K0lIn+cZo3QwsjSsR+5o/eS7Npkd0O2S15c0IuSYdvU7jBMuEdynrbNqYR0zkcvSCRMzjKyhMnyrA9tUyFxWHPwa5uFBnU5HmXOz3tkxxr8Ynn2BSGNqxJM2u66MZJK/KJF2/22wKLC9jj12u61FbypLcFx2122xtiO4K7t/lbAzoJf8Nx2byvh2djFifdt97Ui9obbxkiul6bDYWREsO1u1oIBxdhmBCdeE5hY9OignaiB0Rp8Wi1zPwxH8aAJxKMw9PPl6smka3uduTGwou95ZT+wJuL8Xd+9Z/V36PbBycrad2DGcaWbtMp9UePJDHOHeS5jRPlJ3U2FdzNVfvDEmBipiZmaIznPIpWzvZk1SUGLmSoZ7VFTTRUubRtIN1sh2Cp6u8CfUQS8h7btC4IqvoMhcaz4SSQYmDJUMTra0OicjGXk1SBo25+WGx/JxrJMzE/MyF4fS23JtGG5qSSQA5MVW5Lj7bfRbwv4VMeLqeLfOYIXkKP4sxk1hJLX4A3UWvwxiAERFMq1ovcghudw76QQmz3hGogDsS/eb/vYkB5EbfRROJ3NfChWiPAUvDOnc/wbSHLVZm9fLE7vx/L/EkHRdzCE3Zltc/3XYf4jgfFc/umxG/7PsYngf2/ERBNBaZ2dS01wMHVbZtjOiNkoRiADVYoFcsjhZmugjOTUNBEKETSDJTMPE3HD6/+9QPpiUhbEVlC0Enjfv0qL4CQdNk8Fg3SYj4WGJ9ToOk1hBjFvmgmBgCJYGgO4Ej8zi3CeT6Rs9n9IhkVTGKE8anbhAcOPVSt0ABS5mGLmd4UaXYI/ONGluDNk9PeByeBnW+jYXGIH6NC0QgdAKXgpDgNqc3Fr0DJ8b4MNwlnFsGgN0bFNRhgrKZZUkQD8wJ9CY2hNg4cQ/XNbx2clKFVLy0JjmPENYeT01AobBGgfbyjJEpHnNofqSjd7RTg9zvJkneSz4zQ0/IxiOwSOJfo91nAtF4e/JiI/WabFMPyQLhO97J6Iza8o/UxL0OgMfTZOQ+MnO3rX9naJOh+LQ9cr9qXWyNTsHl7Bv7Jlgf2zXv/nnVV/DnXvC+WZhvyDVxgcmq4SNeKxqbzRG5PGW3EsXZbOoH1hCDd8DoZTO31xSvmJ5H4BjAVimEHX1kg7peZnL79dYI44PsdpJCTn8h5ACmdSd8OfVtM2ghzaA5m0R4s3BgHUBrmr3gB82hwD5TatxAr9ZRj8wDzZAE1IfoZJnZK9DTqAL28CGzyjG2EY1q3/GgIz5xe+dEEYiiYY0qfO5kATcH5n8vFybYihgbDOADA6DZN0sd8vVjOFGXTOMDyxEHx8PFXckF0znPJVBROWpGWGyjDAGpVS7m4Z4qOR6qgS3zhlyF+mWKGw0CVD7hG8wH4UHTLkXYM3WK9FdwzV2uJ/GKar7fLPcrtKDR0fW4vqjCFMSP7EZDsb3SdlotFsqy+j2Fjui64YBro6iKcx9iNHY90nLQ+iXTHUuGpbVRrGV2mZH22PFxwxVJvRpS5fMEIpwG9Y6SXcMFQuwjeTbxq8qb7CZim6Yagwi0NTWzhVfUnbDBUHfDaZc8VUtahEd8FwQMcTdvs17TNsLHrjgCGZdDKr5rwDXblqfk7kgCHpzAztRXEBuRiNXRsHDKm86KKK6q8s0PuCpqLQJUNqCCuM4CdFahRNB5GfIfGjH6rqNim5uakam50hNYTVjz2oOnLDQWRnSJwu1VE1EpsGqGJC4GZIFLvVOyIntn6zsyJuhlgXWVe2ia2NWeEHN0N8wltXEYcXt2f0WWaGWFT3VoveBTjSMJIWMDPEsWt9XeoAfq9RaQQzQzhJOZQ40NgYTVNehniS1lcAUJuiyTTlZQiT3DxlNnD+m6TAeRlC/TuP1AhOD5NboFgZwvsXuDSNKMlI3pNwB1aG8HfmKsiEvoTB/GBlCPMzHHbmAmhrDPI1rAyRSZ/U5/YFlPA32IhYGaK4gq9gEVlTg/iClSGKVfnq+ZBo5aD/GCtD8DG2ZUgsRP3HOBnCXD5frRSUBuvz+5wMUYzDWdCHokR9XMbJEF3VYJhqMAIyZEftpzgZIlPAWcOAcul6Q8bJEB0acla3o+1Cr83gZIhcGs4qDeRQ6J0aToYodioWWtUBqpXRx0//x9CGYffXYfdtaff3w+77NN33S7sfW/QgPux+jN/9PE33c23dz5d2P+fd/XOLHpw9df/8sPtnwD04x+++FqP7epoeaKK6r2vrvjaxB/rS7muEe6Dz7r5Wvwf1Ft2vmelB3VP3a9eY6g9Pii+x6Mv/GtJqDLtfB9yDWu4e1ON3/06FHtyL0YO7TXpwP00P7hjqwT1RPbjrqwf3tfXgzr0Hp/cmCmHo7O5LOQzd3F8qiqGLO2ilMWS/R7guQ/F3QVsA3wUt/T5vG+D7vKXfyW4DfCe78Hv1rYDv1Xf7NsLW4G0EZSLH7s+Br391/77FWvm+xZrzvWH8voXsN0rsgN8okf3OjB3wOzOy3wqyA34rSPZ7T1Yg3nuS/WaXFYg3u2S/u2YF4t012W/nWQERuShxRL9/aAPy/UPZb1hagHzDUvY7pOag3yGV/ZasOei3ZIW/B2wMmCC6JkWEv+lsCJxyv77pLPxdbkOcVDNR+NvqRsCJ2lvmDj8yiB42E4sApzD/7Qg4pcJZfe4aWNLxLS0mDsZ+j2NDCAnurCXa9D/C8N+y7UdY15jdNSH0d6bq47ZBJGfvTwgogTVXyaRb4MKPgtycaPQrtgzqRK8gdSBaPR7b6LMV0AUWnyi0owaRLzvsCLjArDyElDkVP4rkCGbmTUWvRfpU/VhuTJ8VybWo5NqClVJEKdoFC5lbf6Q4pIQZX4Xs/iDRgZuSFRqkwF91bruVFmkEKv005YzBexJu2MjK3OQqxQd9/4Ja6/skx6jO1AJxxZqibdMnTrkEkxPlJ3U3lbYfZhbvMFm1bXOmK50CXnODhoES5j1v6/Atzg2kgbpqxWCv/46PJbla5n4YjuJBE4hHYejny5WuOuMTe63RjxW7TAkTrwnoCzO+cTCYX1Q99e+AkZyLruYUD9PK1dhoLQrE3tgEBtW0hW3j2caz1O2LEmFyk9QdNN6NQFhHsVNTYaEMeBV8LVV8KQ4VY3RFSCwMlfXvsZ3Oty2kdfzkI5lkFIOnYw1+F/AXFvKiQplimaNcL+7Awe8DQSJzrmYJY3psLs/mpNx6mCipW7PFiWHiJGP0kuwkTNdsl7y4oHdF5I/TNllm6Zhb4I8QhPP1efc6zDy+yl8VNl42fN2d1/OwimX5CxLFq0PGjCq5AAAAAElFTkSuQmCC" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Enterprise;