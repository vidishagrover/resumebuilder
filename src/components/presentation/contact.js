import React,{useState,useEffect} from "react";
import {NavLink} from "react-router-dom";
// import update from 'immutability-helper';
import {fieldCd, skinCodes}  from '../../constants/typeCodes';
// import * as contactActions from '../../actions/contactActions';
// import { bindActionCreators } fromcon 'redux';
// import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as contactActions from '../../redux/actions/contactActions';
import ResumePreview from './resumePreview'
import { connect } from "react-redux";

function Contact(props) {
   let history = useHistory();
   const [contact,setContact]= useState(props.contactSection);
   useEffect(() => {
       if(!props.document || !props.document.id || !props.document.skinCd)
       { //if doc select nhi aur glti se contact page pr aagye tioh usse push krdo getting started wale pg pe
           history.push('/getting-started')
       }
   }, [])
  
// ya toh har input ke change pr call ho isse accha jb bhi change ho hum 
//setconatct mai krde manage saare changes
  const onchange=(event)=>{ 
        var key =event.target.name;
        var val =event.target.value;
        // this.setState({contactSection:update(this.state.contactSection,{$merge: {[key]:val}})});
        setContact({...contact,[key]:val})
    }
    const onSubmit= async()=>{
        if(props.contactSection!=null){
            props.updateContact(contact);
        }
        else{
            props.addContact(contact);
        }
        history.push('/education');
    }


    const getFieldData=(key)=>{ // iska use hai ke agr jaise back kra humne eg
        // to select diff skinCD but jo fields bhri thi vo humme dekhne chahiye
        if(contact && contact[key]){
          return contact[key]
        }
        return "";
    }
    
    return (
          <div className="container med contact">
            <div className="section funnel-section">
                <div className="form-card">
                    <h2 className="form-heading center">Personal Details</h2>
                    <div className="form-section">
                        <div className="input-group"><label>First Name</label>
                            <div className="effect"><input type="text" name={fieldCd.FirstName} value={getFieldData(fieldCd.FirstName)}  onChange={onchange}  /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Last Name</label>
                            <div className="effect"><input type="text" name={fieldCd.LastName}  value={getFieldData(fieldCd.LastName)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group full"><label>Professional Summary</label>
                            <div className="effect"><input type="text" name={fieldCd.ProfSummary}   value={getFieldData(fieldCd.ProfSummary)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Email</label>
                            <div className="effect"><input type="text"  name={fieldCd.Email}  value={getFieldData(fieldCd.Email)}  onChange={onchange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Phone</label>
                            <div className="effect"><input type="text"  name={fieldCd.Phone}   value={getFieldData(fieldCd.Phone)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Profession</label>
                            <div className="effect"><input type="text"  name={fieldCd.Profession}  value={getFieldData(fieldCd.Profession)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Street</label>
                            <div className="effect"><input type="text" name={fieldCd.Street}   value={getFieldData(fieldCd.Street)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>City</label>
                            <div className="effect"><input type="text" name={fieldCd.City}  value={getFieldData(fieldCd.City)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>State</label>
                            <div className="effect"><input type="text"   name={fieldCd.State}  value={getFieldData(fieldCd.State)}  onChange={onchange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>


                        <div className="input-group"><label>Country</label>
                            <div className="effect"><input type="text"  name={fieldCd.Country}  value={getFieldData(fieldCd.Country)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Pin Code</label>
                            <div className="effect"><input type="text" name={fieldCd.ZipCode}  value={getFieldData(fieldCd.ZipCode)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="form-buttons">
                            <button onClick={onSubmit} className="btn hvr-float-shadow" type='button'>Next</button>
                            <NavLink to='/getting-started'  className="center">Back</NavLink>
                        </div>
                    </div>

                </div>

                <div className="preview-card">
                    <ResumePreview contactSection={contact} skinCd={props?.document?.skinCd}></ResumePreview>
                </div>

            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        contactSection : state.contact,
        document : state.document //kyuki we need skin code
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addContact : (contact) => dispatch(contactActions.add(contact)),
        updateContact : (contact) => dispatch(contactActions.update(contact))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact)

