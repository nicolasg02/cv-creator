import { MouseEventHandler } from 'react';

import { FormType } from './Body';

import { CVContainer, Item } from '../styled/Body.styled';

interface Props {
  form: FormType;
  handleDownload: MouseEventHandler<HTMLButtonElement>;
}

const CvResult = ({ form, handleDownload }: Props) => {
  return (
    <>
      <div id="cv-to-download">
        <CVContainer>
          <header>
            <h3>{form.name}</h3>
            <div>
              <p className="email">{form.email}</p>
              <p>{form.phone}</p>
            </div>
          </header>
          <section className="educational-experience">
            <h4>Educational Experience</h4>
            <Item>
              <strong>Degree:</strong>
              <p>{form.degree}</p>
            </Item>
            <Item>
              <strong>Institution Name:</strong>
              <p>{form.school}</p>
            </Item>
            <Item>
              <strong>Year of graduation:</strong>
              <p>{form.graduation}</p>
            </Item>
          </section>
          <section className="educational-experience">
            <h4>Practical Experience</h4>
            <Item>
              <strong>Company:</strong>
              <p>{form.company}</p>
            </Item>
            <Item>
              <strong>Position:</strong>
              <p>{form.position}</p>
            </Item>
            <Item>
              <strong>Roles:</strong>
              <p>{form.tasks}</p>
            </Item>
          </section>
        </CVContainer>
      </div>
      <button onClick={handleDownload}>
        <span className="btn-download">Download CV</span>
      </button>
    </>
  );
};

export default CvResult;
