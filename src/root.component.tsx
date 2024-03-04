import {Card} from '@oci-lib/ui'

import '@oci-lib/ui/dist/style.css'

export default function Root(props) {
  return (
    <>
    <div className='d-flex align-item-center justify-content-center mt-4'>
      <div className='col-md-5'>
        <Card title="Peringatan">
          <p>Pilih salah satu untuk melihat UI Microfrontend(UPDATE)</p>
          <div className='d-flex gap-3'>
            <a href='/train' className='btn btn-sm btn-secondary'>MF Train</a>
            <a href='/hotel' className='btn btn-sm btn-secondary'>MF Hotel</a>
            <a href='/cra' className='btn btn-sm btn-secondary'>MF Old App (sebelumnya pakai CRA)</a>
          </div>
        </Card>
      </div>
    </div>
    </>
  )
}
