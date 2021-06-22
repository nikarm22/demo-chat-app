import { makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { Message } from './components/Message';
import { MessageInput } from './components/MessageInput';

interface IChatBody {

}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    messages: {
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        overflowY: 'auto',
    },
    inputBox: {
        height: '32px',
        padding: theme.spacing(1),
    },
}));

const ChatBody: React.FC<IChatBody> = props => {
    const classes = useStyles();

    return <div className={classes.root}>
        <div className={classes.messages}>
            <Message side="left" timestamp="00:00:00">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nulla esse recusandae quasi rerum maiores veniam nobis suscipit adipisci? Fugiat, animi quibusdam nostrum non eligendi officiis nemo blanditiis eum pariatur! Exercitationem incidunt nostrum nulla doloremque fugiat numquam nisi facere, blanditiis eos, et dolores maiores, harum modi dolorum maxime iusto voluptates iste impedit magni atque voluptate nihil id error. Doloribus eius officia optio odit eveniet saepe non consequuntur dolor beatae earum accusamus, quaerat aut reiciendis quibusdam, quod placeat! Accusantium veritatis labore dolores iure eveniet eum perspiciatis repellendus quidem quisquam quia. Laudantium libero quaerat aut beatae deleniti ducimus dolores quis consequatur sint!</Message>
            <Message side="right" timestamp="00:00:00">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure repellat cum inventore architecto suscipit nulla! Culpa repudiandae porro repellat consequatur quae non totam? Atque amet eum id placeat velit dolorum, accusamus quasi facere excepturi ad accusantium repellendus voluptatibus, non sint ea reprehenderit vel ipsum, officiis aliquam corporis voluptatum! Incidunt saepe fugit dignissimos accusantium esse. Ullam corrupti incidunt molestiae, quas, pariatur minus necessitatibus, totam impedit tenetur fugiat animi sit blanditiis provident voluptatum quos at consectetur illum numquam asperiores recusandae ipsum deleniti ex molestias! Magnam necessitatibus tempora laborum obcaecati nisi aliquid voluptate nulla rerum voluptates accusantium iure animi, delectus atque qui, aliquam non! Aperiam iste nobis fuga, cum fugiat non, omnis quo doloremque laudantium obcaecati aspernatur similique excepturi minus recusandae sit sapiente accusantium ad ab. Tenetur dolore facilis repellendus nam perferendis inventore autem unde voluptatem, quas ipsa vitae eaque quaerat error repellat aliquid quod suscipit consequatur, pariatur nulla maiores animi impedit, nesciunt vero molestiae? Voluptatibus explicabo, odio totam, perferendis non ab sunt obcaecati inventore minima assumenda architecto recusandae dolorem voluptatem iure. Nisi suscipit incidunt vero soluta quaerat accusamus eos sint aliquid explicabo veniam impedit nostrum autem aliquam, quas aperiam exercitationem provident odio cumque error facere culpa quibusdam. Error animi quam odit debitis.</Message>
            <Message side="right" timestamp="00:00:00">asdfasdfasdfasdf</Message>
            <Message side="right" timestamp="00:00:00">asdfasdfasdfasdf</Message>
            <Message side="left" timestamp="00:00:00">asdfasdfasdfasdf</Message>
            <Message side="left" timestamp="00:00:00">asdfasdfasdfasdf</Message>
            <Message side="left" timestamp="00:00:00">asdfasdfasdfasdf</Message>
            <Message side="right" timestamp="00:00:00">asdfasdfasdfasdf</Message>
            <Message side="right" timestamp="00:00:00">asdfasdfasdfasdf</Message>
            <Message side="left" timestamp="00:00:00">asdfasdfasdfasdf</Message>
        </div>
        <div className={classes.inputBox}>
            <MessageInput />
        </div>
    </div>;
};

export { ChatBody };
