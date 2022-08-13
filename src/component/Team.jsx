import React from 'react'

function team() {
  return (
    <div>
            <div class="team">
        <div class="team-cont">
            <h2><span>Power up</span> <span class="easy">your teams</span></h2>
            <p>Calendly gives you control over team scheduling with a 
               standardized, scalable process. It’s secure, easy to manage, 
               and integrates with your team's favorite tools, so you can get 
               everyone working as efficiently and effectively as possible.</p>
            <div class="team-but">
                <button class="one"><p>Start for free</p></button>
                <button class="two">Contact Sales</button>
            </div>
        </div>
        <div class="team-img">
            <img src="images/Calendly-Teams-Hero.jpg" alt=""/>
        </div>
    </div>
    <div class="lg-text">
        <p>Streamline tasks, extend team reach</p>
    </div>
    <div class="team2">
        <div class="team-img2">
            <img src="images/team1.jpg" alt=""/>
        </div>
        <div class="lg-text2">
            <h4><span>AUTOMATED ASSIGNMENT</span></h4>
            <h1 class="easy">Control how your team gets booked</h1>
            <p>With Calendly, you can offer sessions that are a few minutes
               or a few hours, for one invitee or a group. Automated round-robin, 
               first-available, or geography-based assignments let you easily divvy 
               up meetings in any way that works for your team members.</p>
        </div>
    </div>
    <div class="solu">
        <h4><span>SOLUTIONS</span></h4>
        <h1 class="easy">The right Calendly for the work you do</h1>
        <div class="solu-cards">
            <div class="solu-card">
                <img src="images/Calendly-Reps.jpg" alt=""/>
                <h3 class="easy">Sales</h3>
                <p class="easy">Get to your best leads faster.</p>
                <p class="learn">Learn more</p>
            </div>
            <div class="solu-card">
                <img src="images/Recruiting.jpg" alt=""/>
                <h3 class="easy">Recruiting</h3>
                <p class="easy">Less emailing, more interviewing</p>
                <p class="learn">Learn more</p>
            </div>
            <div class="solu-card">
                <img src="images/Customer_Success.jpg" alt=""/>
                <h3 class="easy">Customer Success</h3>
                <p class="easy">Connect with customers when it matters</p>
                <p class="learn">Learn more</p>
            </div>
            <div class="solu-card">
                <img src="images/Education.jpg" alt=""/>
                <h3 class="easy">Education</h3>
                <p class="easy">Boost student success<br/>.</p>
                <p class="learn">Learn more</p>
            </div>
        </div>
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

export default team