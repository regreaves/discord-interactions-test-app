import express from 'express';

import {
  InteractionType,
  InteractionResponseType,
  verifyKeyMiddleware
} from 'discord-interactions';

const router = express.Router();

router.route('/interactions')
  .post(verifyKeyMiddleware(process.env.CLIENT_PUBLIC_KEY), (req, res) => {
    const interaction = req.body;

    if (interaction.type === InteractionType.APPLICATION_COMMAND) {
      res.status(200).send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { content: 'Hello, world!' }
      });
    }
  });

export { router };
