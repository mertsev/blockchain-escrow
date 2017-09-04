import React from 'react'
import PropTypes from 'prop-types'



export const Buyer = React.createClass ({
/*   getInitialState: function() {
  }, */
  handleChange: function() {
  },


  handleSubmit: function() {
    alert('Тут должны были быть ваши деньги')
  },

  render: function() {

    return (

      <div style={{ margin: '0 auto' }} >
          <button className="btn btn-primary" onClick={this.handleSubmit}>Заслать денег</button>
      </div>
    );
  }
}
)


export default Buyer
