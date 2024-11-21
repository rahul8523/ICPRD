import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Banner from '../../../components/Banner/Banner'
import Footer from '../../../components/Footer/Footer'
import SupportUs from '../../../components/SupportUs/SupportUs'
import education from '../../../assets/images/VerticlesBanners/education.jpg'
import '../IcprdVerticals.css'
import AboutBox from '../../../components/AboutBox/AboutBox'
export default function EducationAndTraining() {
    const navlinks = [
        { text: 'Home', url: '/' },
        {
            text: 'About us', url: '/aboutUs',
            dropdown: false,
            dropdownOptions: [
                { text: 'About Us', url: '/aboutUs' },
                { text: 'President Desk', url: '/president' },
            ],
        },
        {
            text: 'Verticals',
            dropdown: true,
            dropdownOptions: [
                { text: 'Economic Policy', url: '/economicPolicy' },
                { text: 'International Relations & Foreign Policy', url: '/intrel' },
                { text: 'Climate Change', url: '/climateChange' },
                { text: 'Food Security', url: '/foodSecurity' },
                { text: 'Education & Training', url: '/educationTraining' },
                { text: 'Rural Urbanisation', url: '/ruralUrbanisation' },
                { text: 'Trade & Commerce', url: '/tradeCommerce' },
                { text: 'Agriculture', url: '/agriculture' },
            ]
        },
        {
            text: 'Media',
            dropdown: true,
            dropdownOptions: [
                { text: 'Media Report', url: '' },
                { text: 'News', url: '/news' },
                { text: 'Article', url: '/research-articles' },
                { text: 'Blog', url: '/blog' },
            ],
        },
        { text: 'Event', url: '/event' },
        { text: 'Team Behind us', url: '/people-behind-us' },
        {
            text: 'GlobalChapter',
            dropdown: true,
            dropdownOptions: [
                { text: 'USA', url: '/' },
                { text: 'UK', url: '/' },
                { text: 'South Africa', url: '/' },
            ],
        },
        { text: 'Support Us', url: '/support' },
        { text: 'Contact Us', url: '/contact' },
        // ... other links
    ];
    const bannerData = {
        backgroundImage: education,
        text: "Education & Training",
        subText: "Home / Education & Training"
    };
    return (
        <div className='icprdVerticalPage'>
            <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
            <Banner {...bannerData} />
            <AboutBox
                title="EDUCATION & TRAINING"
                text={[
  "India’s quest for learning in recorded history dates back to the 4th century BCE, with Aryabhata, the renowned mathematician and astronomer, propounding the theory of “zero”, and seats of learning like Nalanda, Vikramshila and Takshashila thriving and spreading knowledge from 4th century BCE to 11th century BCE.",
  "A period often described as the “Golden Age of India” by scholars. Philosophy, mathematics, and theology were taught at these temples of learning, drawing academics, scholars, and students from far away. Islamic education also left its impact in the medieval period. Subsequently, this transformed into the introduction of a Western-style education system introduced by the Europeans as a result of the colonization of India in the 18th century. Several steps to modernize the education system commenced in the mid-20th century which eventually laid much of the foundation of the education system of the new Republic of India. The system has been transforming to keep up with the changing times and requirements of its populace.",
  "Education in India is a concurrent list subject in the constitution with both the Central and State governments having powers and responsibility to implement policies related to education. Though India has made great strides in educating its citizens since independence with a literacy rate above 75%, total literacy is yet to be achieved. There is still a lot of potential for development and improvement of the education system in the country. India, with one of the largest networks of higher education institutions in the world, holds an important place in the global education sector. With its young population of over 580 million in the age bracket of 5-24 years, India presents a unique opportunity as well as a challenge in the education sector.",
  "There are over 250 million school-going students, over 38.5 million students in higher education, and over 42000 colleges and 1072 universities in the country, Thus, the education sector in India is expected to reach USD 125 billion by 2025 in value terms. There is a great demand for specialized and industry-oriented courses and training.",
  "With the liberalization of the economy and increasing globalization, private sector investment in the education sector has increased substantially over the last two decades. So, the question is why can’t this be made possible in all Indian States? The answer to this lies in the need for a relentless and stepped-up effort to achieve total literacy throughout the country with no exceptions. While the spread of literacy is critical for India to achieve its developmental goals, the quality of education also merits attention. India’s education system needs to redefine itself and align with global trends with the introduction of advanced technologies like AI, ML, blockchain, and LoT skills. India has also embraced the Education 4.0 revolution which promotes inclusive learning and employability.",
  "The government has initiated several policies and programmes for this and the New Education Policy (2020) redefines the vision in the education and training sector. Foreign direct investment (FDI) in the education sector is now permitted up to 100% through the automatic route and this has led to a surge in FDI in the sector. Centres of excellence like IISC, and IITs have been identified and are being further upgraded to take their global rankings higher. The emergence of ed-tech unicorns catering to online education management training – covering formal training and soft skills -- is heartening. The creation of student testing organizations like the Joint Entrance Examination (JEE) and National Eligibility Cum Entrance Test (NEET) for entry to technical and medical education respectively have brought about standardization and uniformity in the system.",
  "Since education is also closely linked with employment, the deficiencies in formal learning need to be addressed and education has to be linked with skills to improve the student’s employability and inclusion in the formal sector. India has programmes for skill development and vocational training. But the edge and reach that these should have to attain mass utility need to be addressed.",
  "ICPRD is working to identify and bridge all such gaps wherever they exist as per a plan to renew the programmes that can help people to stand on their feet as reasonably educated and suitably skilled for a variety of jobs and myriad vocations."
]}
                classNameUnique="pad-4-s-2 educat morepaff"
            />

            <SupportUs />
            <Footer />
        </div>
    )
}
