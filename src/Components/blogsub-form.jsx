import React from 'react'

class SubscribePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        emailValue: '',
    };
  }

    render() {
        return (
                <form action="https://MichelDigital.us5.list-manage.com/subscribe/post" method="POST" noValidate className="d-flex justify-content-center ml-lg-auto">
                  <input type="hidden" name="u" value="f78a364a75f36754a33f829fa"/>
                <input type="hidden" name="id" value="c7edd6b5ef"/>
                <label htmlFor='MERGE0'>
                    <input 
                        type="email" 
                        name="EMAIL" 
                        id="MERGE0"
                        value={this.state.emailValue} 
                        onChange={ (e)=>{this.setState({emailValue: e.target.value});} } 
                        autoCapitalize="off" 
                        autoCorrect="off"
                        className="form-control form-control-lg border-0 w-100 w-md-250 w-xl-300"
                     /> 
                </label>

                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn btn-dark btn-lg hover-lift-light mt-3 mt-md-0 ml-md-3"/>

                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
                    <label htmlFor="b_name">Name: </label>
                    <input type="text" name="b_name" tabIndex="-1" value="" placeholder="Freddie" id="b_name"/>

                    <label htmlFor="b_email">Email: </label>
                    <input type="email" name="b_email" tabIndex="-1" value="" placeholder="youremail@gmail.com" id="b_email"/>

                    <label htmlFor="b_comment">Comment: </label>
                    <textarea name="b_comment" tabIndex="-1" placeholder="Please comment" id="b_comment"></textarea>
                </div>
              </form>
        )
    }
}

export default SubscribePage;