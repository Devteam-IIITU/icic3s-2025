import React from 'react';
import Card from '../constants/Card';
import { teamMembers } from '../constants/constants'; 

const TeamSection: React.FC = () => {
  return (
    <div className='bg-zinc-200'>
    <div className="space-y-12 ">
      {Object.entries(teamMembers).map(([sectionTitle, members]) => (
        <section key={sectionTitle} className="our-team team-11">
          <div className="container mx-auto">
            <div className="session-title text-center mt-10 mb-8">
              <h2 className="text-2xl lg:text-4xl font-bold text-forestgreen">
                {sectionTitle.replace(/([A-Z])/g, ' $1').toUpperCase()}
              </h2>
            </div>
            <div className="flex flex-wrap justify-center">
              {members.map((member, index) => (
                <Card
                  key={index}
                  Image={member.image}
                  Name={member.name}
                  Post={member.post}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
    </div>
  );
};

export default TeamSection;
