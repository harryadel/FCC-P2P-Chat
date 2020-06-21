import Room from './model';

export default {
  createRoom: async (_, args) => {
    /**
     * Request body / Graphql variables are stored inside
     * args variable
     */
    let room = await Room.findOne({ name: args.name });
    if (room) {
      return {
        success: false,
        message: 'A room already exists with such name',
      };
    } else {
      let room = await Room.insert({ name: args.name });
      console.log("ROOM: ", room)
      return {
        success: true,
        message: 'Room created successfully',
        room,
      };
    }
  },
};
