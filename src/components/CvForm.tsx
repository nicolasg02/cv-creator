import { ChangeEventHandler, MouseEventHandler } from 'react';

import { FormType } from './Body';

import { Form, SectionName } from '../styled/Body.styled';

interface Props {
  handleInputChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  handleResetBtn: MouseEventHandler<HTMLButtonElement>;
  handleCreateCVBtn: MouseEventHandler<HTMLButtonElement>;
  form: FormType;
}

const CvForm = ({
  handleInputChange,
  handleResetBtn,
  handleCreateCVBtn,
  form,
}: Props) => {
  return (
    <Form>
      <section>
        <SectionName>General Information</SectionName>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Name"
          autoComplete="off"
          onChange={handleInputChange}
          required={true}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Email"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="phone"
          value={form.phone}
          placeholder="Phone Number"
          autoComplete="off"
          onChange={handleInputChange}
        />
      </section>

      <section>
        <SectionName>Educational Experience</SectionName>
        <input
          type="text"
          name="school"
          value={form.school}
          placeholder="School/University Name"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <div className="degree-select" key={form.degree}>
          <select
            name="degree"
            id="degree"
            defaultValue={form.degree}
            onChange={handleInputChange}>
            <option value="-" disabled>
              Select your degree
            </option>
            <option value="Highschool">Highschool</option>
            <option value="Bachelor">Bachelor</option>
            <option value="College">College</option>
          </select>
        </div>
        <input
          type="number"
          name="graduation"
          value={form.graduation}
          placeholder="Year of graduation"
          onChange={handleInputChange}
        />
      </section>

      <section>
        <SectionName>Practical Experience</SectionName>
        <input
          type="text"
          name="company"
          value={form.company}
          placeholder="Company Name"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="position"
          value={form.position}
          placeholder="Position Title"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <textarea
          name="tasks"
          value={form.tasks}
          id="tasks"
          placeholder="Describe your main tasks of your job"
          onChange={handleInputChange}></textarea>
      </section>

      <div className="btn-container">
        <button className="btn-reset" onClick={handleResetBtn}>
          Reset Fields
        </button>
        <button type="submit" onClick={handleCreateCVBtn}>
          Create Your CV
        </button>
      </div>
    </Form>
  );
};

export default CvForm;
