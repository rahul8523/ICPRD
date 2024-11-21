import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import SupportUs from "../../components/SupportUs/SupportUs";
import BannerImg from "../../assets/images/Blog/decode.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../BlogInner/post.css";

export default function Post7({ Date, titles }) {
    const navlinks = [
        { text: "Home", url: "/" },
        {
            text: "About us",
            dropdown: true,
            dropdownOptions: [
                { text: "About Us", url: "/aboutUs" },
                { text: "President Desk", url: "/president" },
            ],
        },
        {
            text: "Verticals",
            dropdown: true,
            dropdownOptions: [
                { text: "Economic Policy", url: "/economicPolicy" },
                { text: "International Relations & Foreign Policy", url: "/intrel" },
                { text: "Climate Change", url: "/climateChange" },
                { text: "Food Security", url: "/foodSecurity" },
                { text: "Education & Training", url: "/educationTraining" },
                { text: "Rural Urbanisation", url: "/ruralUrbanisation" },
                { text: "Trade & Commerce", url: "/tradeCommerce" },
                { text: "Agriculture", url: "/agriculture" },
            ],
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
        { text: "Event", url: "/event" },
        { text: "Team Behind us", url: "/people-behind-us" },
        {
            text: 'GlobalChapter',
            dropdown: true,
            dropdownOptions: [
                { text: 'USA', url: '/' },
                { text: 'UK', url: '/' },
                { text: 'South Africa', url: '/' },
            ],
        },
        { text: "Support Us", url: "/support" },
        { text: "Contact Us", url: "/contact" },
        // ... other links
    ];
    const bannerData = {
        backgroundImage: BannerImg,
        text: "Decoding Climate Change",
        subText: "Home / Decoding Climate Change",
    };
    return (
        <div className="icprdVerticalPage">
            <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />
            <Banner {...bannerData} />
            <Container className="py-4">
                <Row>
                    <Col sm={12} md={12}>
                        <p className="small float-right">20/12/2023</p>
                    </Col>
                    <Col sm={12} md={12}>
                        <h2 className="pb-3 textbo"> {bannerData.text}</h2>
                        <p className="text-justify">
                            <p>
                                Climate change, a term that echoes through our global consciousness, represents a pivotal challenge. The article aims to smoothly navigate the multifaceted aspects of climate change, unravelling its complexities and offering a clear understanding of its far-reaching impact.
                            </p>
                            <p>
                                Climate change encompasses the significant alterations in global weather patterns over time. This broad concept includes rising temperatures and changes in precipitation, wind patterns, and other environmental variables.
                            </p>
                            <h4>The Underlying Mechanism</h4>
                            <p>
                                Central to climate change is the Greenhouse Effect. Natural greenhouse gases (GHGs) like carbon dioxide and methane are vital for trapping heat and sustaining life. However, human-induced emissions from burning fossil fuels and deforestation have amplified this effect, causing abnormal global warming.
                            </p>
                            <p>
                                The fact is that there is Human Influence and Industrialization that is fast changing the global ecosystem:
                            </p>

                            <ul class="first-l">
                                <li>
                                    <strong>Anthropogenic Impact:</strong> The dramatic increase in greenhouse gases (GHGs) since the Industrial Revolution is linked to human activities. Burning fossil fuels for energy, deforestation, and industrial processes are vital contributors.
                                </li>
                                <li>
                                    <strong>Industrialization's Dual Role:</strong> While industrialization propelled human progress, it also marked a significant shift in climate dynamics. The unprecedented use of coal, oil, and natural gas has altered the Earth's atmosphere, triggering a cascade of climate changes.
                                </li>
                            </ul>
                            <h5>Multidimensional Impact of Climate Change</h5>
                            <p>
                                The impact of climate change is multidimensional, and a collaborative effort is a must to curb temperatures within 2 degrees Celsius. Various aspects that get impacted are:
                            </p>
                            <ul class="first-l">
                                <li><strong> Environmental Repercussions: </strong>Climate change manifests in rising sea levels, melting polar ice, extreme weather events, and shifts in ecosystems and wildlife. These environmental changes are profound and far-reaching.    </li>
                                <li><strong> Societal and Economic Implications: </strong>The ripple effects extend to human societies and economies. Climate change threatens health, food security, water resources, and economic stability, disproportionately impacting vulnerable communities.</li>
                            </ul>

                            <p>
                                Therefore, addressing climate change has become a global priority, with initiatives like the Paris Agreement aiming to curb global warming. National and local regulatory and implementation policies are also pivotal in reducing emissions and promoting sustainability. Additionally, effective climate action requires a comprehensive approach, encompassing renewable energy adoption, energy efficiency, ecosystem conservation, and sustainable innovation. Fostering international cooperation and climate literacy is equally critical.
                            </p>

                            <p>
                            In conclusion, Climate change, transcending environmental boundaries, touches every facet of human existence. Grasping its intricacies paves the way for effective responses. As the world grapples with these changes, our actions must adapt, striving for a sustainable and equitable future.
                            </p>
                            <p><strong>Authored By: Prachi Jain</strong> </p>
                        </p>
                    </Col>
                </Row>
            </Container>

            <SupportUs />
            <Footer />
        </div>
    );
}
