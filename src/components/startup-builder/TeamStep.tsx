import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface TeamStepProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const TeamStep: React.FC<TeamStepProps> = ({ formData, updateFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const addTeamMember = () => {
    const teamMembers = formData.teamMembers || [];
    updateFormData({
      teamMembers: [
        ...teamMembers,
        { name: '', role: '', skills: '', experience: '' }
      ]
    });
  };

  const updateTeamMember = (index: number, field: string, value: string) => {
    const teamMembers = [...(formData.teamMembers || [])];
    teamMembers[index] = { ...teamMembers[index], [field]: value };
    updateFormData({ teamMembers });
  };

  const removeTeamMember = (index: number) => {
    const teamMembers = [...(formData.teamMembers || [])];
    teamMembers.splice(index, 1);
    updateFormData({ teamMembers });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Build Your Team</h2>
      <p className="text-neutral-600 mb-8">
        A strong team is crucial for startup success. Define your founding team and identify skill gaps.
      </p>

      <div className="space-y-6">
        <div>
          <label htmlFor="founderBackground" className="block text-sm font-medium text-neutral-700 mb-1">
            Founder Background
          </label>
          <textarea
            id="founderBackground"
            name="founderBackground"
            value={formData.founderBackground || ''}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="Share your relevant experience, skills, and why you're the right person to lead this startup"
          ></textarea>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-neutral-700">
              Team Members
            </label>
            <button
              type="button"
              onClick={addTeamMember}
              className="inline-flex items-center px-3 py-1 border border-primary-300 text-sm leading-5 font-medium rounded-md text-primary-700 bg-primary-50 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <Plus className="h-4 w-4 mr-1" /> Add Member
            </button>
          </div>

          <div className="space-y-4">
            {(formData.teamMembers || []).map((member: any, index: number) => (
              <div key={index} className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                <div className="flex justify-between mb-2">
                  <h4 className="text-sm font-medium text-neutral-700">Team Member {index + 1}</h4>
                  <button
                    type="button"
                    onClick={() => removeTeamMember(index)}
                    className="text-neutral-400 hover:text-error-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      value={member.name}
                      onChange={(e) => updateTeamMember(index, 'name', e.target.value)}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Role
                    </label>
                    <input
                      type="text"
                      value={member.role}
                      onChange={(e) => updateTeamMember(index, 'role', e.target.value)}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="e.g., CTO, Marketing Lead"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Key Skills
                    </label>
                    <input
                      type="text"
                      value={member.skills}
                      onChange={(e) => updateTeamMember(index, 'skills', e.target.value)}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="e.g., Programming, Design, Sales"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Experience
                    </label>
                    <input
                      type="text"
                      value={member.experience}
                      onChange={(e) => updateTeamMember(index, 'experience', e.target.value)}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="e.g., 5 years at Google"
                    />
                  </div>
                </div>
              </div>
            ))}

            {(formData.teamMembers || []).length === 0 && (
              <p className="text-sm text-neutral-500 italic">
                No team members added yet. Click "Add Member" to begin building your team.
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="skillGaps" className="block text-sm font-medium text-neutral-700 mb-1">
            Skill Gaps & Hiring Needs
          </label>
          <textarea
            id="skillGaps"
            name="skillGaps"
            value={formData.skillGaps || ''}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="What skills is your team missing? What roles do you need to fill in the next 6-12 months?"
          ></textarea>
        </div>

        <div>
          <label htmlFor="advisors" className="block text-sm font-medium text-neutral-700 mb-1">
            Advisors & Mentors
          </label>
          <textarea
            id="advisors"
            name="advisors"
            value={formData.advisors || ''}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="List any advisors or mentors who are supporting your startup"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TeamStep;