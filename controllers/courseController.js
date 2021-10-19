const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json({
      staus: 'success',
      course,
    });
  } catch (error) {
    res.status(400).json({
      staus: 'failure',
      error,
    });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).render('courses', {
      page_name: 'courses',
      courses,
    });
  } catch (error) {
    res.status(400).json({
      staus: 'failure',
      error,
    });
  }
};

exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findOne({slug: req.params.slug});
    console.log(course)
    res.status(200).render('course', {
      page_name: 'courses',
      course,
    });
  } catch (error) {
    res.status(400).json({
      staus: 'failure',
      error,
    });
  }
};
