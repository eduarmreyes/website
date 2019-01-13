import React from 'react'
import PropTypes from 'prop-types'

const WorkingProcess = ({ author, from, cta_text }) => (
  <section className="bg-grey-lightest">
    <div className="container mx-auto py-8 px-6">
      <h1 className="text-center">
        My Working Process
      </h1>
      <h3 className="text-grey-darker text-center mt-4">
        As a Front End developer, the way I craft out great websites is as follows
      </h3>
    </div>
  </section>
)

WorkingProcess.propTypes = {
  author: PropTypes.string,
}

WorkingProcess.defaultProps = {
  author: '',
}

export default WorkingProcess
