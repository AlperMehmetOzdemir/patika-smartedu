const Course = require('../models/Course');
const Category = require('../models/Category');

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
    const categorySlug = req.query.categories;
    const category = await Category.findOne({ slug: categorySlug });

    let filter = {};

    if (categorySlug) {
      filter = { category: category._id };
    }

    const courses = await Course.find(filter);
    const categories = await Category.find({});

    res.status(200).render('courses', {
      page_name: 'courses',
      courses,
      categories,
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
    const course = await Course.findOne({ slug: req.params.slug });
    console.log(course);
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
