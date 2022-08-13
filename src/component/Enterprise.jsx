import React from 'react'

function Enterprise() {
  return (
    <div>
         <div class="enthead">
            <h1><span>Way more</span> than a scheduling link</h1>
            <p>Standardize on the #1 scheduling platform and deliver 
               the power of Calendly across your entire organization.</p>
            <button>Contact Sales</button>
        </div>
        <div class="banner">
            <div>
                <p>Trusted by more than 50,000 of the world’s leading organizations</p>
            </div>
            <div class="ban-icon">
                <i class="fa fa-digg"></i>
                <i class="fab fa-dropbox"></i>
                <i class="fa fa-wechat"></i>
                <i class="fa fa-cc-visa"></i>
                <i class="fa fa-cc-paypal"></i>
            </div>
        </div>
        <div class="cards">
            <div class="card">
                <h4><span>Sales</span></h4>
                <img src="images/Sales__1_.svg" alt=""/>
                <p>Convert more leads and prospects into meetings and revenue. 
                   Easily book demos and customer calls without the back and forth.</p>
            </div>
            <div class="card">
                <h4><span>Customer Success</span></h4>
                <img src="images/Customer_Success.svg" alt=""/>
                <p>Deliver better support interactions and customer consultations. 
                   Stay connected with automated reminders and follow-ups.</p>
            </div>
            <div class="card">
                <h4><span>Recruiting</span></h4>
                <img src="images/Recruiting__1_.svg" alt=""/>
                <p>Fill your candidate pipeline and book more interviews and recruiter 
                   screens with easy, standardized scheduling.</p>
            </div>
        </div>
        <div class="ca-but">
        <button>Learn more</button>
        </div>
        <div class="foot">
            <div class="first">
                <h2><span class="easy">Easy</span><br/><span>ahead</span></h2>
                <p>We take the work out of connecting with others so you can accomplish more.</p>
                <select name="lang" id="lang">
                    <option value="volvo">English</option>
                    <option value="saab">Twi</option>
                    <option value="opel">French</option>
                    <option value="audi">Chinese</option>
                </select>
            </div>
            <div class="second">
                <h3>About</h3>
                <p>About Calendly</p>  
                <p>Contact Sales</p>  
                <p>Newsroom</p>  
                <p>careers</p>  
                <p>Security</p>  
            </div>
            <div class="second">
                <h3>Solutions</h3>
                <p>Customer Success</p>
                <p>Sales</p>
                <p>Recruiting</p>
                <p>Education</p>
                <p>Marketing</p>
            </div>
            <div class="second">
                <h3>Popular Features</h3>
                <p>Embed Calendly</p>
                <p>Availability</p>
                <p>Sending Notifications</p>
                <p>Using Calendly Mobile</p>
            </div>
        </div>
    </div>
  )
}

export default Enterprise