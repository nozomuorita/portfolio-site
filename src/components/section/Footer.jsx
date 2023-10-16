import React from 'react'

function Footer() {
  return (
    <>
        {/* <!-- Footer--> */}
        <footer class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-start">Copyright &copy; NOZOMU ORITA</div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        <a class="btn-dark btn-social mx-2 x-icon" href="https://twitter.com/account_0818" aria-label="X" target='_blank'><svg viewBox="0 0 1800 1800" xmlns="http://www.w3.org/2000/svg">
                            <rect height="100%" width="100%" rx="10%" ry="10%"/>
                            <path d="m1014.2 805.8 446.7-519.3h-105.9l-387.9 450.9-309.8-450.9h-357.3l468.5 681.8-468.5 544.6h105.9l409.6-476.2 327.2 476.2h357.3zm-145 168.5-47.5-67.9-377.7-540.2h162.6l304.8 436 47.5 67.9 396.2 566.7h-162.6z" fill="#fff"/>
                        </svg></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <div class="col-lg-4 text-lg-end">
                        <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>

    </>
  )
}

export default Footer
