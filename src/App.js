import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fontsource/poppins";
import ParticlesBg from "particles-bg";

function App() {
    return (
        <div className="container">
            <div className="card-background">
                <div className="card_body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="profile text-center">
                                <img
                                    src="/profil.png"
                                    className="avatar"
                                    alt=""
                                />
                                <h3>Krisna Dewa Pratama</h3>
                                <p>
                                    Web Developer and Cyber Security Enthusiast
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 link">
                            <div className="d-grid gap-2">
                                <a
                                    className="btn_action "
                                    href="https://krisdewa.my.id"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="bi bi-globe"></i> Web Profile
                                </a>
                                <a
                                    className="btn_action "
                                    href="https://www.linkedin.com/in/krisna-dewa-pratama-9aa907153/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="bi bi-linkedin"></i> LinkedIn
                                </a>
                                <a
                                    className="btn_action "
                                    href="https://www.instagram.com/krisdewa_/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="bi bi-instagram"></i> Instagram
                                </a>
                                <a
                                    className="btn_action "
                                    href="https://www.facebook.com/krisna.d.pratama.1/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="bi bi-facebook"></i> Facebook
                                </a>
                                <a
                                    className="btn_action "
                                    href="https://twitter.com/KrisDewa_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="bi bi-twitter"></i> Twitter
                                </a>
                                <a
                                    className="btn_action "
                                    href="https://www.youtube.com/c/Krisdewa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="bi bi-youtube"></i> Youtube
                                </a>
                                <a
                                    className="btn_action "
                                    href="https://github.com/krisdewa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="bi bi-github"></i> Github
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 text-center">
                        <small className="text-muted">
                            © 2022 By. KrisDewa
                        </small>
                    </div>
                </div>
            </div>

            <ParticlesBg type="cobweb" bg={true} />
        </div>
    );
}

export default App;
