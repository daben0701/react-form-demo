import React from 'react';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
          userName: '',
          userPassword: '',
          userEmail: '',
          userPhone: '',
          userIntro: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var userName = this.refs.userName.value.trim();
        var userPassword = this.refs.userPassword.value.trim();
        var userEmail = this.refs.userEmail.value.trim();
        var userPhone = this.refs.userPhone.value.trim();
        var userIntro = this.refs.userIntro.value.trim();
        if (!userName || !userPassword) {
          return;
        }
        // TODO: send request to the server
        this.setState({
          userName: "",
          userPassword: "",
          userEmail: "",
          userPhone: "",
          userIntro: ""
        });
        return;
    }

    setUserName = (e) => {
        this.setState({
            userName:e.target.value
        })
    }

    setUserPassword = (e) => {
        this.setState({
            userPassword:e.target.value
        })
    }

    setUserEmail = (e) => {
        this.setState({
            userEmail:e.target.value
        })
    }

    setUserPhone = (e) => {
        this.setState({
            userPhone:e.target.value
        })
    }

    setUserIntro = (e) => {
        this.setState({
            userIntro:e.target.value
        })
    }

    componentDidMount(){
        $.ajax({
          url: "/reacttest/test",
          type: "get",
          success: function(data){
            var jsonData = JSON.parse(data);
            this.setState({
              userName: jsonData.userName,
              userPassword: jsonData.userPassword,
              userEmail: jsonData.userEmail,
              userPhone: jsonData.userPhone,
              userIntro: jsonData.userIntro
            });
          }.bind(this),
            error: function(){
            }
        });
    }

    render() {
        return (
            <div className="admin-content">
                <div className="admin-content-body">
                    <div className="am-cf am-padding am-padding-bottom-0">
                        <div className="am-fl am-cf">
                            <strong className="am-text-primary am-text-lg">个人资料</strong> / <small>Personal information</small>
                        </div>
                    </div>
                    <hr/>
                    <div className="am-g" style={{
                        marginTop: 30 + 'px'
                    }}>
                        <div className="am-u-sm-12 am-u-md-8">
                            <form className="am-form am-form-horizontal" onSubmit={this.handleSubmit}>
                                <div className="am-form-group">
                                    <label className="am-u-sm-3 am-form-label" htmlFor="userName">帐号 / Account</label>
                                    <div className="am-u-sm-9">
                                        <input type="text" id="userName" ref="userName" value={this.state.userName}  onChange={this.setUserName} placeholder="帐号 / Account"/>
                                    </div>
                                </div>
                                <div className="am-form-group">
                                    <label htmlFor="userPassword" className="am-u-sm-3 am-form-label">密码 / Password</label>
                                    <div className="am-u-sm-9">
                                        <input type="text" id="userPassword" ref="userPassword" value={this.state.userPassword} onChange={this.setUserPassword} placeholder="密码 / Password"/>
                                    </div>
                                </div>
                                <div className="am-form-group">
                                    <label htmlFor="userEmail" className="am-u-sm-3 am-form-label">电子邮件 / Email</label>
                                    <div className="am-u-sm-9">
                                        <input type="email" id="userEmail" ref="userEmail" value={this.state.userEmail} onChange={this.setUserEmail} placeholder="输入你的电子邮件 / Email"/>
                                    </div>
                                </div>
                                <div className="am-form-group">
                                    <label htmlFor="userPhone" className="am-u-sm-3 am-form-label">电话 / Telephone</label>
                                    <div className="am-u-sm-9">
                                        <input type="tel" id="userPhone" ref="userPhone" value={this.state.userPhone} onChange={this.setUserPhone} placeholder="输入你的电话号码 / Telephone"/>
                                    </div>
                                </div>
                                <div className="am-form-group">
                                    <label htmlFor="userIntro" className="am-u-sm-3 am-form-label">简介 / Intro</label>
                                    <div className="am-u-sm-9">
                                        <textarea rows="5" id="userIntro" ref="userIntro" value={this.state.userIntro} onChange={this.setUserIntro} placeholder="输入个人简介"></textarea>
                                    </div>
                                </div>
                                <div className="am-form-group">
                                    <div className="am-u-sm-9 am-u-sm-push-3">
                                        <button type="submit" className="am-btn am-btn-primary">保存修改</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
