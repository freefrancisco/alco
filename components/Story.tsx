// import { marked } from "https://deno.land/x/marked/mod.ts";
import { marked } from "https://deno.land/x/marked@1.0.2/mod.ts"


const markdownContent = `
### Introduction
In August 2023, I signed a contract with Alco Windows and Doors to install impact windows, a requirement from my HOA for insurance purposes. 
Initially, Alco communicated frequently and efficiently, but that changed once they received full payment. 
They arranged financing through a third party, and while I’ve been paying interest on the loan, Alco received the money upfront and has yet to deliver.

### Lack of Progress and Communication
Despite involving my HOA president and receiving a permit expiration warning from the city, Alco has made no progress. 
The owner, Luis Alvarez, actively promotes his business online but hasn’t responded to my inquiries.

### Questioning Positive Reviews
I chose Alco based on their numerous positive reviews, but my experience has made me question their accuracy.
 My HOA lawyers reviewed the contract, and I trusted their advice, but the year-long delay has left me paying for undelivered services, right as hurricane season begins.

### Attempted Contact With Luis Alvarez
After the warning from the city, I sent an email to everyone I had been in contact with at Alco, including Luis Alvarez, 
the founder and Managing Director, but received no response. 
The Managing Director, Luis Alverez, is active online. 
In his [LinkedIn profile](https://www.linkedin.com/in/luis-alvarez-0a7a7b57/), he claims expertise with SEO, 
a strategy companies use to optimize search engine results, sometimes presenting a more favorable image than reality. 
There is also a [Power100 Business Profile](https://power100.io/luis-alvarez-ceo-lander/) of Luis Alvarez where they emphasize his SEO expertise.

### Public Persona vs Customer Experiences
![Luis Alvarez, Managing Director of Alco](https://media.licdn.com/dms/image/v2/D4D22AQEV2r4zV0s9NA/feedshare-shrink_800/feedshare-shrink_800/0/1701800543657?e=1729123200&v=beta&t=H78uLZZLG3BErTI-GbWMLRAxblVokjYJiSD23gis08Y)

Luis Alvarez also maintains a profile on [Twitter (X)](https://x.com/la7483), and is listed on 
the [Alco management team](https://www.alcoimpact.com/our-team/) page on their website, as well as having his own 
company profile here: [Luis Alvarez Profile](https://www.alcoimpact.com/our-team/detail/?employee=luis-alvarez).

Luis Alvarez was [honored by the Doral Chamber of Commerce](https://www.doralchamber.org/luis-alvarez-alco-windows-and-doors-honored/) in 2022. 
In contrast to his public persona, Alco Windows and Doors has accumulated 44 complaints over the past three years, 
with 31 filed in just the last year. Most complaints involve delays in installation, 
unresponsive customer service, and failure to deliver products after full payment. 
This can be found on the [Better Business Bureau Page For Complaints against Alco](https://www.bbb.org/us/fl/doral/profile/impact-windows/alco-windows-and-doors-llc-0633-90414965/complaints). 
The situation is so critical that they have [lost their Better Business Bureau accreditation](https://www.bbb.org/us/fl/doral/profile/impact-windows/alco-windows-and-doors-llc-0633-90414965).

### Contradictory Online Reviews
On their website, they prominently display the positive Google reviews they have received, 
but if you visit [their Google Maps Page](https://www.google.com/maps/place/Alco+Windows+and+Doors/@25.786464,-80.343327,16z/data=!4m14!1m7!3m6!1s0x88d9b8e4d8421cd1:0x65841e77fdc48647!2sAlco+Windows+and+Doors!8m2!3d25.786464!4d-80.3407467!16s%2Fg%2F11dxdkybdg!3m5!1s0x88d9b8e4d8421cd1:0x65841e77fdc48647!8m2!3d25.786464!4d-80.3407467!16s%2Fg%2F11dxdkybdg?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D), 
you'll find many recent negative reviews, which are overshadowed by older positive reviews.

Alco is based in Doral according to their website's [Contact Us](https://www.alcoimpact.com/contact-us/) page.
~~~
1421 NW 89th Ct
Doral, FL 33172
(786) 550-2380
Contractor License #CGC1526312
~~~



### My Experience Mirrors That of Other Customers

It appears my experience with Alco Windows and Doors is not an isolated case. 
In July 2024, [NBC Miami reported](https://www.nbcmiami.com/responds/after-months-of-waiting-man-turns-to-nbc6-responds-for-help-with-home-improvement-project/3365036/) 
on a customer named Joseph Johnson who faced remarkably similar issues.

After moving to South Florida, Joseph and his wife prioritized making their home hurricane-ready.
On August 22, 2022, they signed a contract with Alco to replace six windows and two doors, financing the $25,898 project through a third party—just like I did. 
Joseph began making payments immediately, with Alco assuring him that the project would be completed before the start of the hurricane season.

However, after signing, communication from Alco dwindled. 
Joseph repeatedly contacted them to inquire about the project's status but received little information. 
His HOA approved the project promptly in January, but Alco still did not proceed. 
Frustrated by the delays and continued loan payments for undelivered services, Joseph filed complaints with state authorities and reached out to NBC6 Responds.

An attorney for Alco eventually contacted Joseph, citing delays in obtaining HOA approval as the reason for the holdup—despite records showing the HOA had approved the project months earlier. 
It wasn't until late June, over six months after receiving HOA approval and after NBC6 got involved, that Alco applied for the necessary permits. 
Feeling distrustful, Joseph decided to cancel the contract and requested a full refund. 
Alco agreed to refund him but did not address why the delays occurred.

### Parallels to My Situation

Much like Joseph, I:
- **Arranged Financing Through a Third Party**: We started making payments immediately.
- **Received Prompt HOA Approval**: Our HOAs were cooperative, contrary to Alco's claims.
- **Experienced Communication Issues**: Alco became unresponsive after receiving payment.
- **Faced Delays**: Despite permits being granted, Alco did not proceed with installation.
- **Endured Financial Strain**: We paid for undelivered services during critical times.

These similarities suggest a concerning pattern with Alco Windows and Doors.

### NBC Interview
Here is the full interview with Joseph in NBC: 






`;


// custom renderer for mardkown links
const renderer = new marked.Renderer();
  renderer.link = (href, title, text) => {
    const url = href.href || href.raw || href || "#";
    const displayText = text || href.text || "Link";
    
    return `<a href="${url}" title="${title || ''}" class="text-blue-500 underline font-bold hover:text-blue-700">${displayText}</a>`;
  };
  


export default  function Story(){
  const htmlContent = marked(markdownContent);//, {renderer});
  return <div class="prose prose-lg prose-blue hover:text-gray-600 visited:text-gray-800" dangerouslySetInnerHTML={{ __html: htmlContent }} />
}  
 


