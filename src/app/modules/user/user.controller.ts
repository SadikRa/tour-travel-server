// req and res manage

import { Request, Response } from 'express';
import { userService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';

const createUser = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await userService.createUser(payload);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'user cerate successfully',
    data: result,
  });
});

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUser();

    res.send({
      status: true,
      message: 'Users getting successfully',
      result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    console.log(req.params);
    const userId = req.params.userId;

    const result = await userService.getSingleUser(userId);

    res.send({
      status: true,
      message: 'User getting successfully',
      result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const body = req.body;
    const result = await userService.updateUser(userId, body);

    res.send({
      status: true,
      message: 'User updated successfully',
      result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    await userService.deleteUser(userId);

    res.send({
      status: true,
      message: 'User deleted successfully',
      result: {},
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

export const userController = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
