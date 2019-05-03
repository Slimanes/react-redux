import React,{Component} from 'react';

export interface LogsProps {
    lines: string[]
}

export default class Logs extends Component  <LogsProps> {

    render() {
        return (
            <div>
                {
                    this.props.lines.map((line, index) => {
                        return <div key={index}>{line}</div>;
                    })
                }
            </div>
        );
    }

}