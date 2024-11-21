import React from "react";

import Iconimg from "../../../assets/images/event-details/iconrt.png";
import Avtar from "../../../assets/images/ResearchArticlesDetails/avtar.png";
import ArticlesImage from "../../../assets/images/ResearchArticlesDetails/gallery.png";
import ArticlesImage2 from "../../../assets/images/ResearchArticlesDetails/pdf.png";
import MapImage from "../../../assets/images/ResearchArticlesDetails/map.png";
import Tableimage from "../../../assets/images/ResearchArticlesDetails/table.png";
import TableImage2 from "../../../assets/images/ResearchArticlesDetails/table2.png";
import TableImage3 from "../../../assets/images/ResearchArticlesDetails/table3.png";
import "./ResearchArticlesDetail.css";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SupportUs from "../../../components/SupportUs/SupportUs";

export default function ResearchArticlesDetail() {
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
            { text: 'Healthcare', url: '/' },
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

  return (
    <div className="economic-policy icprdVerticalPage">
      <Navbar links={navlinks} className={"FromDeskOfPresidentPage"} />

      <Container className="border-bottom">
        <Row className="align-items-center my-5">
          <Col sm={12} md={12} className="aboutSe aboutSe boardss">
            <div className="px-3">
              <h1 class="text-left">
                Effect of Arsenic Ingestion <span>________</span>
              </h1>
              <h5 className="fw-bold pt-5">
                <img src={Avtar} alt="" style={{ width: "20px" }} /> Sujeet
                Kumar Dubey
              </h5>
              <h5>
                Associate Professor, Department of Psychology, A.N.College,
                Patna
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row className="d-flex">
          <Col
            sm={12}
            md={3}
            style={{ background: "#ebaa01" }}
            className="d-flex align-content-center flex-wrap"
          >
            <img src={ArticlesImage2} alt="icon" width={100} className="pl-3" />
            <br />
            <h5 className="text-white pl-3">
              {" "}
              Download full text <img src={Iconimg} alt="icon" width={40} />
            </h5>
          </Col>
          <Col sm={12} md={9}>
            <img src={ArticlesImage} alt="" style={{ width: "100%" }} />
          </Col>
        </Row>
      </Container>
      <Container style={{ width: "90%" }}>
        <Row>
          <Col sm={12} md={12} className="p-0">
            <div className="ecopolicy pt-5">
              <p className="para text-left pt-3">
                Bihar is one of the
                majorarsenic-affectedstatesofIndia.Inarsenic-affecteddistrictsofBihar,
                we got information on various problems i.e, not only physical
                harm but also so many typesof mental illness.Unfortunately, the
                consequences of arsenic exposure on mental health have notbeen
                adequatelystudied.Thepresent research aims to measure children's
                mental healthin arsenic-affected districts of Bihar. 500 school
                children from 20 blocks were selected as samplesfor the study.
                Different Psychological tests were administered for the purpose
                of the study.The resultrevealed that in arsenic-affected
                districts of Bihar mental development was not according to
                thestandardized level of development. Mental retardation and
                different developmental disabilitieswerefoundinchildrenofthe
                arsenic-affecteddistrictofBihar.
              </p>
              <br></br>
              <p className="para text-left">
                Keywords: Arsenic, Mental health, development, children, Bihar
              </p>

              <p className="para text-left">
                Statement of the problem:- Arsenic toxicity has become a human
                health threat worldwide. In South Asia, arsenic contamination in
                groundwater in the Ganga- Brahmaputra fluvial plains in India
                and Padma-Meghna fluvial plains in Bangladesh has been found to
                have a huge impact on human health and its consequences have
                been reported as the world’s biggest natural groundwater
                calamities. Millions of people in Bihar, India, are showing
                symptoms of arsenic poisoning, which can be linked to cancer,
                due to the consumption of contaminated drinking water. The state
                of Bihar, in eastern India, is one of the country's most
                impoverished states. More than 10 million people in the state
                are estimated to be threatened with arsenic poisoning or
                arsenicosis from contaminated groundwater.
              </p>

              <p className="para text-left">
                Introduction:- The Ganga River basin (GRB) is a part of the
                Ganga-Brahmaputra- Meghna (GBM) river basin, draining 1.08
                million km2 in Tibet, Nepal, India, and Bangladesh; it covers
                nearly 26% of India’s land mass and is home to a population of
                over 500 million. Currently available scientific literature
                reveals that the Ganga is considered to be one of the world’s
                most polluted rivers, containing a number of toxins including
                arsenic, cadmium, chromium, copper, lead, and mercury, as well
                as pesticides and pathogenic microbes nearly 3000 times greater
                than the safe limit prescribed by the World Health Organization
                (WHO). In India, West Bengal, Jharkhand, Bihar, Uttar Pradesh in
                the flood plains of the Ganga, Assam and Manipur in the flood
                plains of the Brahmaputra and Imphal rivers and Rajnandgaon
                village in Chhattisgarh state have been reported to be affected
                by arsenic contamination in groundwater (Ghosh and
                Singh,).Arsenic (As) is an odourless and tasteless metalloid
                widely distributed in the earth’s crust. Arsenic in drinking
                water is absorbed through the intestine into the bloodstream
                through which it reaches the various organs. The human body
                normally gets rid of smaller amounts of arsenic through urine.
                However, if there are large amounts of arsenic, the remaining
                arsenic accumulates inside the body and can lead to adverse
                health effects. Arsenic causes or increases the risk of numerous
                illnesses. It leads to skin damage including keratosis and skin
                cancer, internal cancers such as that of the lung and bladder,
                and diseases of the vascular system. Arsenicosis is the medical
                word for arsenic poisoning, which occurs due to the accumulation
                of large amounts of arsenic in the body. The guideline value or
                maximum contaminant level (MCL) for arsenic in drinking water is
                10 ppb (according to WHO) followed by most of the developed
                countries.In developing countries including India and
                Bangladesh, 50 ppb is considered as the accepted level for
                arsenic in drinking water.
              </p>

              <img
                src={MapImage}
                alt=""
                style={{ width: "100%" }}
                className="py-3"
              />

              <p className="para text-left">
                Exposure to arsenic leads to an accumulation of arsenic in
                tissues such as skin, hair, and nails, resulting in various
                clinical symptoms such as hyperpigmentation and keratosis. There
                is also an increased risk of skin, internal organs, and lung
                cancers. Cardiovascular disease and neuropathy have been linked
                to arsenic consumption. Verbal IQ and long-term memory can also
                be affected, and arsenic can suppress hormone regulation and
                hormone-mediated gene transcription.
              </p>
              <p className="para text-left">
                Bihar:- Bihar is one of the least developing states of India
                both in terms of per capita income and human development index.
                In the last few decades, pollution of water levels has increased
                due to excessive exploitation of groundwater resources for
                irrigation and drinking purposes, rapid increase in
                industrialization and urbanization. The groundwater level is
                falling in many parts due to excess drawls leading to
                contamination problems with nitrate, fluoride, arsenic and other
                chemicals; this also contributes to contaminating potable water
                sources.
              </p>
              <p className="para text-left">
                Bihar and a few other states of India face a severe problem due
                to the arsenic menace in groundwater. Groundwater is the main
                source of drinking water and it constitutes more than 80 per
                cent of drinking sources in rural Bihar. Around 40 percent
                districts of Bihar have reported arsenic in its groundwater.
                This comprises more than 67 blocks from 15 districts and covers
                more than 1600 habitations across the state where arsenic
                contamination in groundwater exceeds the Bureau of Indian
                Standard (BIS) limits for safe drinking water of 50 parts per
                billion (ppb) and more. If we consider the WHO limit of 10 ppb,
                the coverage area will be much more and the population which is
                facing the danger of arsenic hazard will be more than the BIS
                standard limit. It is estimated that more than 13.85 million
                people could be under the threat of contamination levels above
                10 ppb/l, out of which more than 6.96 million people could be
                above 50 ppb/l, against the total population of these areas is
                around 50 million (Ministry of Water Resources, 2010). The
                actual problem of arsenic menace among the population will be
                more than the estimate due to the increase in the affected area
                after every new survey.
              </p>
              <p className="para text-left">
                Out of seven states, two states of India namely Bihar and West
                Bengal are worst affected by arsenic contamination in their
                groundwater. Altogether more than 40 percent of the people from
                Bihar and West Bengal are affected by arsenic contamination in
                groundwater which causes serious threats to the people of the
                state in health and other hazards which act as threats to the
                socio-economic status of the affected people.
              </p>

              <img
                src={Tableimage}
                alt=""
                style={{ width: "100%" }}
                className="py-3"
              />

              <p className="para text-left">
                Chronic arsenic exposure can cause many diseases, including
                various physical and psychological harms. Although the physical
                problems caused by arsenic toxicity are well reported in
                literature, unfortunately, the consequences of arsenic effect on
                mental health are not adequately studied (Kapaz, Peterson,
                Liber, Bhattacharya, 2006). In India, a cross-sectional study on
                351 children (5-15 y.o.) exposed to an average of 147 μg/L
                arsenic in water throughout development and childhood found an
                association between arsenic exposure and poor performance in
                several measures focusing on vocabulary, math skills, memory,
                and overall cognition; however, confidence intervals and the age
                range of participants in this study were broad (Von et al,
                2007). In India, over 1.5 million people have been exposed to
                high levels of arsenic with more than 200,000 cases of
                arsenicosis. Cross-sectional analysis of over 1169 arsenicosis
                patients between the ages of 18-65 y.o. revealed that 19 % of
                patients developed some type of psychiatric disorder, compared
                to an average 7 % prevalence of mental disorders in India.
              </p>
              <p className="para text-left">
                There are three possible channels through which unsafe arsenic
                levels in drinking water may affect mental health:
                physiological, social, and psychological. The physiological
                channel can occur due to two reasons: first, drinking
                arsenic-contaminated water may affect certain brain functions
                and in turn directly increase the probability of depression
                (Martinez et al., 2008). Second, individuals affected by
                arsenicosis may actually feel sick, which has been shown to be
                related to lower mental health (Dolan et al., 2008). Arsenic may
                affect individuals socially if arsenicosis patients suffer from
                discrimination and social exclusion. There is some evidence
                showing that arsenicosis is sometimes believed to be contagious
                and that victims are socially stigmatized (George et al., 2013;
                Hassan et al., 2005; Brinkel et al., 2009). Suffering from
                arsenicosis symptoms should therefore lead to a decrease in
                mental health. A third channel, which is somewhat connected to
                the other two but refers to a different mechanism, is the
                psychological channel. Individuals may start worrying about
                their health, future or family (Schwartz and Melech, 2000) when
                they or one of their family members have arsenicosis symptoms,
                or when they drink out of a red or unlabeled TW.4 Again
                arsenicosis symptoms would lead to lower mental health.
              </p>
              <p className="para text-left">
                The arsenic problem also has a major effect on the
                socio-economic structure. The socio-economic problems can be
                mainly categorized into three classes: agricultural problems,
                health problems and other problems (Thakur et al. 2013). Excess
                presence of contaminated water leads to decreased agricultural
                productivity and soil fertility and enters into the food chain,
                creating health problems. Brammer (2008) suggested that in
                India, Nepal, and Bangladesh, arsenic contaminated water used
                for irrigation enters into the food chain. All these three
                problems lead to both social and economic problems. While skin
                lesions, bladder, cancer, and mortality are few of the resulting
                health problems, social ignorance, depression, and suicidal
                tendency are among the few social problems. The presence of
                arsenic in water or the environment does not preclude the
                presence of other elements; in fact, it is probable that a
                number of metals (Pb, Mn, Cd, Hg) are comorbid in individuals
                with arsenic exposure in the studies provided here. Reports on
                developmental exposures to heavy metal mixtures suggest that
                combined exposure is associated with a greater risk for
                cognitive dysfunction, including behaviour and impaired
                neurological (CNS) development (Rai, 2010). The incidence of
                mental retardation is highly correlated with the presence of
                soil metals in rural areas (As, Cu, Pb, Mn, Hg), and the
                probability of intellectual disability in children increases as
                the concentration of arsenic and lead in the soil increases
                (Mcdermot, 2011).
              </p>
              <p className="para text-left">
                Purpose of the study:- The purpose of the present research was
                to measure the mental health of children in arsenic-affected
                districts of Bihar, and also to find out what other
                psychological problems they are facing currently. It was an
                attempt to study the mental health of arsenic-affected children,
                i.e. those children who have already developed physical symptoms
                of arsenic.
              </p>
              <p className="para text-left">
                Hypotheses:- The main hypotheses of the present research were as
                follows:- (a) Arsenic-affected children will be low on different
                dimensions on Mental health battery. (b) The effect of arsenic
                will be found on the attention capacity of the children. (c
                )Learning process in children will be affected by the effect of
                arsenic. (e) Mood disorders will be found in children living in
                arsenic-affected areas. (f) Arsenic effect will be seen in the
                memory, reading and visual perception of the children. Sample:-
                500 school children from 20 blocks were selected as a sample for
                the study. They were in the age group of 10-15 years. The
                accidental cum purposive sampling technique has been used in the
                study. The sample has been taken from different arsenic-affected
                districts of Bihar.
              </p>
              <p className="para text-left">
                Tools:- For the measurement of the mental health of students of
                minority and majority groups, MENTAL HEALTH BATTERY was used.
                This inventory was developed by Dr. Arun Kumar Singh and Dr.
                Apana Sen Gupta (2000). The scale consists of 130 items which
                measure six dimensions of mental health—Emotional Stability (15
                items), Overall Adjustment (40 items), Autonomy (15 items),
                Security Insecurity (15 items), Self Concept (15 items) and
                Intelligence (30 items). Scoring has been done with the help of
                the scoring key. A high score means better mental health. The
                reliability and validity of the scale are 0.87 and 0.61
                respectively. Apart from this, a personal data sheet was
                prepared to collect information about the cognitive problems of
                children in arsenic-affected areas. These cognitive problems
                included attention deficit, hyperactivity, learning deficits,
                mood disorder, memory deterioration, reading deficit, visual
                perception etc.
              </p>
              <p className="para text-left">
                Data collection procedure:- The subjects were requested to
                respond honestly and genuinely on the items of the two
                questionnaires. Scoring has been made on the basis of answers
                given by the subjects. Data was obtained by analyzing the
                responses of the subjects.
              </p>
              <p className="para text-left">
                Results :-The results of the present study have been presented
                in tabular forms with two tables- Table A and Table B.
              </p>
              <img
                src={TableImage2}
                alt=""
                style={{ width: "100%" }}
                className="py-3"
              />
              <p className="para text-left">
                Table A presents the mean scores of arsenic-affected children on
                the six dimensions of the mental health battery. From the table,
                we can see that children have shown low mental health status. Of
                all the six dimensions, five dimensions have low scores. This is
                an alarming situation. It means that Children are emotionally
                unstable, and insecure, and have low autonomy, low self-concept
                and low intelligence. This confirms the first hypothesis of the
                study. We found that suffering from an arsenicosis symptom, even
                more so than other illnesses, is strongly positively related to
                mental health. The arsenic-affected people have skin diseases,
                cancer, and other physical problems which destruct their face
                and body image. They are socially ignored and hence they feel
                insecure. This obstructs their social life and they got mentally
                disturbed.
              </p>
              <p className="para text-left">
                Prevalence of cognitive problems among children of
                arsenic-affected areas. ( Table-B )
              </p>
              <img
                src={TableImage3}
                alt=""
                style={{ width: "100%" }}
                className="py-3"
              />

              <p className="para text-left">
                Table B shows the percentage of children facing different
                cognitive problems. It can be seen from the table that about
                68.2% of children reported that they have a reading deficit.
                Also, 63.2% have memory deterioration. Learning deficits are
                prone in 60.4% of subjects. This supports the earlier research
                that reported poorer scores in arsenic-exposed children on
                measures of language and vocabulary and a modest association
                with hyperactive behaviour using the attention deficit
                hyperactive disorder (ADHD) index (Roy et al, 2011). Evidence
                presented suggests that chronic ingestion of arsenic alters a
                number of intelligence measures and induces earning deficits and
                mood disorders like depression. Researchers concluded that
                arsenic exposure was associated with a 0.4 decrease in IQ in
                exposed children (Rodriguez-Barranco M, et al, 2013). These
                results confirm the second, third, fourth and fifth hypotheses
                of the present study.
              </p>
              <p className="para text-left">
                Conclusion:- Conclusively we can say that arsenic has a negative
                effect, physically as well as psychologically. It can produce
                many cognitive problems in the affected people. Chronic moderate
                exposure to arsenic, more so than high acute exposure, may
                induce greater harm to intellectual function in children. Access
                to safe and clean drinking water and sanitation are basic human
                needs. They are fundamentally linked to the health and
                well-being of the people. The majority of the people facing
                arsenic in their drinking water is from the poor socio-economic
                background. They are either not aware or if aware are forced to
                take drinking from the same source due to a lack of alternative
                sources of water. However, in Indian society, arsenicosis
                patients are able to maintain their traditions, kinship, and
                caste relations to cope with stress of the disease. Similar to
                observations of the general population, anxiety and depression
                were the most common psychiatric disorders in arsenicosis
                patients; however, lower SES, the diseases associated with
                arsenic poisoning, body image, and low self-esteem are
                predisposing factors of psychological issues in this population.
                A lot of broad research is needed in this field before it will
                become a major epidemic issue.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <SupportUs />
      <Footer />
    </div>
  );
}
