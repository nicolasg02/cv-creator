import { useState, ChangeEventHandler, MouseEventHandler } from 'react';
import download from 'downloadjs';
import * as htmlToImage from 'html-to-image';

import CvForm from './CvForm';
import CvResult from './CvResult';

import { BodyWrapper } from '../styled/Body.styled';

export type FormType = {
  name: string;
  email: string;
  phone: string;
  school: string;
  degree: string;
  graduation: string;
  company: string;
  position: string;
  tasks: string;
};

const initialState = {
  name: '',
  email: '',
  phone: '',
  school: '',
  degree: '-',
  graduation: '',
  company: '',
  position: '',
  tasks: '',
};

const Body = () => {
  const [form, setForm] = useState(initialState as FormType);
  const [submitCV, setSubmitCV] = useState(false);

  const handleInputChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  > = (e) => {
    const field = e.target.name;
    const fieldValue = e.target.value;

    setForm((prevState) => ({
      ...prevState,
      [field]: fieldValue,
    }));
  };

  const handleResetBtn: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setForm(initialState);
    setSubmitCV(false);
  };

  const handleCreateCVBtn: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setSubmitCV(true);
  };

  const handleDownload: MouseEventHandler<HTMLButtonElement> = () => {
    htmlToImage
      .toPng(document.getElementById('cv-to-download') as HTMLElement)
      .then((dataUrl) => {
        download(dataUrl, 'my-cv.png');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <BodyWrapper>
      <CvForm
        handleInputChange={handleInputChange}
        handleResetBtn={handleResetBtn}
        handleCreateCVBtn={handleCreateCVBtn}
        form={form}
      />
      {submitCV && <CvResult form={form} handleDownload={handleDownload} />}
    </BodyWrapper>
  );
};

export default Body;
