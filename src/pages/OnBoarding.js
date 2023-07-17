import Nav from '../components/Nav';
import { useState } from 'react';



const OnBoarding = () => {
  const [formData, setFormData] = useState ({
    user_id: '',
    first_name: '',
    dob_day: '',
    dob_month: '',
    dob_year: '',
    show_gender: false,
    gender_identity: 'man',
    gender_interest: 'woman',
    email: '',
    url: '',
    personality_type: 'intp',
    disease: '',
    about:'',
    matches: []
  })

  const handleSubmit = () => {
    console.log('submitted')
  }

  const handleChange = (e) => {
    console.log('e', e)
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const name = e.target.name

    setFormData((prevState) => ( {
      ...prevState,
      [name] : value
    }))
  }

  console.log(formData)
  
  return (
    <>
      <Nav
          minimal = {true}
          setShowModal = {() => {}} 
          showModal= {false} 
          setIsSignUp={false} 
      />
      <div className='onboarding'>
        <h2>CREATE ACCOUNT</h2>

        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first_name"> First Name </label>
            <input 
              id="first_name"
              type="text"
              name='first_name'
              placeholder='First Name'
              required={true}
              value={formData.first_name}
              onChange={handleChange}
            />

            <label> Birthday </label>
            <div className='multiple-input-container'>
              <input 
                id="dob_day"
                type="number"
                name='dob_day'
                placeholder='DD'
                required={true}
                value={formData.dob_day}
                onChange={handleChange}
              />
              
              <input 
                id="dob_month"
                type="number"
                name='dob_month'
                placeholder='MM'
                required={true}
                value={formData.dob_month}
                onChange={handleChange}
              />

              <input 
                id="dob_year"
                type="number"
                name='dob_year'
                placeholder='YYYY'
                required={true}
                value={formData.dob_year}
                onChange={handleChange}
              />  
            </div>  

            <label> Gender </label>
            <div className='multiple-input-container'>

              <input 
                id="man-gender-identity"
                type="radio"
                name='gender_identity'
                value={"man"}
                onChange={handleChange}
                checked={formData.gender_identity === 'man'}
              />
              <label htmlFor="man-gender-identity"> Man </label>
              
              <input 
                id="woman-gender-identity"
                type="radio"
                name='gender_identity'
                value={"woman"}
                onChange={handleChange}
                checked={formData.gender_identity === 'woman'}
              />
              <label htmlFor="woman-gender-identity"> Woman </label>

              <input 
                id="more-gender-identity"
                type="radio"
                name='gender_identity'
                value={"more"}
                onChange={handleChange}
                checked={formData.gender_identity === 'more'}
              />
              <label htmlFor="more-gender-identity"> More </label>
            </div>

            <label htmlFor="show-gender"> Show gender on my profile </label>
            <input 
                id="show-gender"
                type="checkbox"
                name='show_gender'
                onChange={handleChange}
                checked={formData.show_gender}
              />

            <label>Show Me</label>
            <div className='multiple-input-container'>
              <input 
                id="man-gender-interest"
                type="radio"
                name='gender_interest'
                value={"man"}
                onChange={handleChange}
                checked={formData.gender_interest === 'man'}
              />
              <label htmlFor="man-gender-interest"> Man </label>
                
                <input 
                  id="woman-gender-interest"
                  type="radio"
                  name='gender_interest'
                  value={"woman"}
                  onChange={handleChange}
                  checked={formData.gender_interest === 'woman'}
                />
                <label htmlFor="woman-gender-interest"> Woman </label>

                <input 
                  id="more-gender-interest"
                  type="radio"
                  name='gender_interest'
                  value={"everyone"}
                  onChange={handleChange}
                  checked={formData.gender_interest === 'everyone'}
                />
                <label htmlFor="more-gender-interest"> Everyone</label>
              </div>
              
              <label> Personality types based on Myers-Briggs theory, please choose yours</label>
              <select onChange={handleChange} type="radio">
                <option id="intj-personality-type" name='personality_type' value={"intj"} checked={formData.personality_type === 'intj' === 'intj'}>INTJ</option>
                <option id="intp-personality-type" name='personality_type' value={"intp"} checked={formData.personality_type === 'intp' === 'intp'}>INTP</option>
                <option id="entj-personality-type" name="personality_type" value={"entj"} checked={formData.personality_type === 'entj' === 'entj'}>ENTJ</option>
                <option id="entp-personality-type" name="personality_type" value={"entp"} checked={formData.personality_type === 'entp' === 'entp'}>ENTP</option>
                <option id="infj-personality_type" name="personality_type" value={"infj"} checked={formData.personality_type === 'infj' === 'infj'}>INFJ</option>
                <option id="infp-personality-type" name="personality_type" value={"infp"} checked={formData.personality_type === 'infp' === 'infp'}>INFP</option>
                <option id="enfj-personality-type" name="personality_type" value={"enfj"} checked={formData.personality_type === 'enfj' === 'enfj'}>ENFJ</option>
                <option id="enfp-personality-type" name="personality_type" value={"enfp"} checked={formData.personality_type === 'enfp' === 'enfp'}>ENFP</option>
                <option id="istj-personality-type" name="personality_type" value={"istj"} checked={formData.personality_type === 'istj' === 'istj'}>ISTJ</option>
                <option id="istj-personality-type" name="personality_type" value={"isfj"} checked={formData.personality_type === 'isfj' === 'isfj'}>ISFJ</option>
                <option id="estj-personality-type" name="personality_type" value={"estj"} checked={formData.personality_type === 'estj' === 'estj'}>ESTJ</option>
                <option id="esfj-personality-type" name="personality_type" value={"esfj"} checked={formData.personality_type === 'esfj' === 'esfj'}>ESFJ</option>
                <option id="istp-personality-type" name="personality_type" value={"istp"} checked={formData.personality_type === 'istp' === 'istp'}>ISTP</option>
                <option id="isfp-personality-type" name="personality_type" value={"isfp"} checked={formData.personality_type === 'isfp' === 'isfp'}>ISFP</option>
                <option id="estp-personality-type" name="personality_type" value={"estp"} checked={formData.personality_type === 'estp' === 'estp'}>ESTP</option>
                <option id="esfp-personality-type" name="personality_type" value={"esfp"} checked={formData.personality_type === 'esfp' === 'esfp'}>ESFP</option>
              </select>
              <p>If you do not know what type of personality you are, you can take a free test: <a href="https://www.16personalities.com/personality-types" target="_blank" rel="noreferrer">Free Personality Test</a></p>
            

              <label htmlFor='disease'> Health Condition, Diseases </label>
              <input 
                id="disease"
                type="text"
                name='disease'
                placeholder='diabetes'
                value={formData.disease}
                onChange={handleChange}
              />
              <input type="submit" />

              <label htmlFor='about'> About me </label>
              <input 
                  id="about"
                  type="text"
                  name='about'
                  required={true}
                  placeholder='I like long walks'
                  value={formData.about}
                  onChange={handleChange}
                />
                <input type="submit" />
            </section>

            <section>
              <label htmlFor='about'>Profile</label>
                  <input 
                    type="url"
                    name="url"
                    id='url'
                    onChange={handleChange}
                    required={true}
                  />
              
                <div className="photo-container">
                  <img  src={formData.url} alt="profile pic preview"/>
                
                
                </div>
            </section>

        </form>
      </div>
    </>
  )
}

export default OnBoarding;
