import * as React from 'react';

// Constants
import { otherSkillsRow1, otherSkillsRow2 } from 'imports/lib/data/skillsDiagram';

// Styles
import './other-skills.css';

export default class OtherSkillsDiagram extends React.PureComponent {
    render() {
        return (
            <>
                <div className='other-skills-container'>
                    {otherSkillsRow1.map(({ name, img, url }) => (
                        <div className='other-skill' key={name}>
                            <div>
                                <h4>{name}</h4>
                            </div>
                            <div>
                                <a href={url} target='_blank'>
                                    <img src={img} alt={name}/>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='other-skills-container'>
                    {otherSkillsRow2.map(({ name, img, url }) => (
                        <div className='other-skill' key={name}>
                            <div>
                                <h4>{name}</h4>
                            </div>
                            <div>
                                <a href={url} target='_blank'>
                                    <img src={img} alt={name}/>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}