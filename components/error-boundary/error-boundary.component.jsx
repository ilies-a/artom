import React from "react";
import styles from "./error-boundary.module.scss";

class ErrorBoundary extends React.Component {
    constructor(){
        super();

        this.state= {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error){
        return { hasErrored: true };
    }

    componentDidCatch(error, info){
        console.log(error);
    }

    render(){
        if(this.state.hasErrored){
            return <div className={styles["main-container"]}>
                <div className={styles["header-message"]}>Internal Server Error</div>
                <div className={styles["body-message"]}>Sorry, an internal server error occured.</div>
              </div>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;