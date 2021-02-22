import React from "react";
import Fade from 'react-reveal/Fade';

import Section from 'elements/Section'
import Header from 'parts/Header'
import Cliens from 'parts/Client'
import Feature from 'parts/Feature'



import HeroImage from 'assets/images/hero-image.png'
import FeatureTitle01 from 'assets/images/feature-tile-icon-01.svg'
import FeatureTitle02 from 'assets/images/feature-tile-icon-02.svg'
import FeatureTitle03 from 'assets/images/feature-tile-icon-03.svg'


export default function Homepage() {
    const features = [
        {
            imgSrc: FeatureTitle01,
            imgAlt: "Feature tile icon 01",
            title: "Join BWA",
            description: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
        },
        {
            imgSrc: FeatureTitle02,
            imgAlt: "Feature tile icon 02",
            title: "Join BWA",
            description: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
        },
        {
            imgSrc: FeatureTitle03,
            imgAlt: "Feature tile icon 03",
            title: "Join BWA",
            description: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
        }
    ];
    return (
    <div className="body-wrap">
        <Header></Header>
        <main className="site-content">
            <Section className="hero illustration-section-01" isCenteredContent>
            <div className="container-sm">
                <div className="hero-inner section-inner">
				    <div className="hero-content">
                        <Fade bottom delay={500}>
					        <h1 className="mt-0 mb-16">Landing template for startups</h1>
                        </Fade>
                        <div className="container-xs">
                            <Fade bottom delay={1000}>
                                <p className="mt-0 mb-32">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                            </Fade>
                        </div>
                    </div>
                        <div className="hero-figure illustration-element-01">
                            <Fade bottom delay={1500}>
                                <img className="has-shadow" src={HeroImage} alt="Hero image"width="896" height="504"/>
                            </Fade>
                        </div>
						</div>
					</div>
            </Section>
            <Cliens></Cliens>
            <Section className="features-tiles">
                <div className="container">
					<div className="features-tiles-inner section-inner">
						<div className="tiles-wrap">
                            {features.map((features, index) => ( <Feature 
                                key={index}
                                delayInMS={index = 100}
                                data={features}>
                               </Feature>))}
                            
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    </div>
    );
}